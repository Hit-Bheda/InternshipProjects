import jwt from "jsonwebtoken";
import config from "../config/config.js";
import { Student } from "../models/student.model.js";

export const studentAuth = async (req, res, next) => {
  if (req.headers.studenttoken) {
    const check = jwt.verify(req.headers.studenttoken, config.secret);
    if (!check) return res.json({ msg: "Invalid Token!" });
    const data = await Student.findById(check.id);
    if (!data) return res.json({ msg: "Student Not Found" });
    req.user = data;
    next();
  } else {
    res.status(500).json({ msg: "Header Not Found" });
  }
};
