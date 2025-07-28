import { Request, Response } from "express";
import { sendContactEmail } from "../routes/emailService";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const sendContactMessage = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = contactSchema.parse(req.body);

    await sendContactEmail(name, email, message);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.issues });
    }
    console.error("Email send failed:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
};
