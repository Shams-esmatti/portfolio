import nodemailer from "nodemailer";

export const sendContactEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.SMTP_RECEIVER,
    subject: "🚀 New Contact from Portfolio",
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  return transporter.sendMail(mailOptions);
};
