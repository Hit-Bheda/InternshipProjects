import express from "express";
import {
  login,
  studentData,
  updateStudent,
} from "../controllers/student.controller.js";
import { studentAuth } from "../middlewares/studentAuth.middleware.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ msg: "Ok" });
});
router.post("/login", login);
router.get("/studentData", studentAuth, studentData);
router.post("/updateStudent", studentAuth, updateStudent);

export default router;
