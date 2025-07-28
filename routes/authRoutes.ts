import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const adminUser = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
};

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === adminUser.username && password === adminUser.password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET!, {
      expiresIn: "2h",
    });

    return res.json({ token });
  }

  return res.status(401).json({ error: "Invalid credentials" });
});

export default router;
