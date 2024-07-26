import express from "express";
import adminRouter from "./routes/admin.router.js";
import studentRouter from "./routes/student.router.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use("/api", adminRouter);
app.use("/student", studentRouter);

app.all("*", (req, res) => {
  res.status(404).json({ msg: "Page Not Found" });
});

export default app;
