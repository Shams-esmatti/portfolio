import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;
