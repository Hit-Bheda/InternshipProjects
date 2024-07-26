import express from "express";
import {
  login,
  register,
  createStudent,
  updateStudent,
  deleteStudent,
  allStudent,
  singleStudent,
} from "../controllers/admin.controller.js";
import { adminAuth } from "../middlewares/adminAuth.middleware.js";
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/createStudent", adminAuth, createStudent);
router.post("/updateStudent/:id", adminAuth, updateStudent);
router.post("/deleteStudent/:id", adminAuth, deleteStudent);
router.get("/allStudent", adminAuth, allStudent);
router.get("/singleStudent/:id", adminAuth, singleStudent);

export default router;
