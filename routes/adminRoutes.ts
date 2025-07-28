import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { authenticateAdmin } from "../middleware/auth";

const router = Router();
const filePath = path.join(__dirname, "../data/messages.json");

router.get(
  "/api/admin/messages",
  authenticateAdmin,
  (req: Request, res: Response) => {
    try {
      const data = fs.readFileSync(filePath, "utf-8");
      const messages = JSON.parse(data);
      res.json(messages);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res.status(500).json({ error: "Failed to read messages" });
    }
  }
);

export default router;
