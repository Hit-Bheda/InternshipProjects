import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import { Student } from "../models/student.model.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await Student.findOne({ email });
    if (!data) return res.json({ msg: "Student Not Found" });
    const match = await bcrypt.compare(password, data.password);
    if (!match) return res.json({ msg: "Invalid Password!" });
    const studentToken = jwt.sign({ id: data.id }, config.secret);
    if (!studentToken) return res.json({ msg: "Error While Generating Token" });
    res.json({ studentToken });
  } catch (err) {
    console.error("Error While Login ", err);
    res.json({ err });
  }
};

export const studentData = async (req, res) => {
  try {
    res.json(req.user);
  } catch (err) {
    console.error("Error While Fetching Student Data");
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { name, phone, password } = req.body;
    const student = req.user;
    if (password) {
      const match = await bcrypt.compare(password, student.password);
      if (match) return res.json({ msg: "This Is Your Currunt Password" });
    }
    const data = await Student.findByIdAndUpdate(student.id, {
      name,
      phone,
      password,
    });
    if (!data)
      return res.json({ msg: "something Went Wrong While Updating Data" });
    res.json(data);
  } catch (err) {
    console.error("Error While Updating Data", err);
  }
};
