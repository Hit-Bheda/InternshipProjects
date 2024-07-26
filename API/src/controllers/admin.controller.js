import { Admin } from "../models/admin.model.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import bcrypt from "bcrypt";
import { Student } from "../models/student.model.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await Admin.findOne({ email });
    if (!data) return res.status(500).json({ msg: "Email Not Found" });
    const verify = bcrypt.compare(password, data.password);
    if (!verify) return res.status(500).json({ msg: "Invalid Password" });
    const token = jwt.sign({ id: data.id }, config.secret);
    res.status(200).json({ token });
  } catch (err) {
    console.error("Erro While Login :", err);
  }
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const data = await Admin.findOne({ email });
    if (data) return res.status(500).json({ msg: "Email Exits!" });
    const hashPass = await bcrypt.hash(password, 12);
    const createData = await Admin.create({ name, email, password: hashPass });
    res
      .status(200)
      .json([{ msg: "Data Inserted Sucessfully" }, { data: createData }]);
  } catch (err) {
    console.error("Error While Regiastering", err);
  }
};

export const createStudent = async (req, res) => {
  try {
    const { name, email, enrollment, phone, course, password } = req.body;
    const check = await Student.findOne({ email });
    if (check) return res.json({ msg: "Student Alredy Exists!" });
    const hashPass = await bcrypt.hash(password, 12);
    const createData = await Student.create({
      name,
      email,
      enrollment,
      phone,
      course,
      password: hashPass,
    });
    res.json({ data: createData });
  } catch (err) {
    console.error("Error While Creating Student Data ", err);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, enrollment, phone, course, password } = req.body;
    const check = await Student.findOne({ email });
    if (!check) return res.json({ msg: "Student Does Not Exists!" });
    const hashPass = await bcrypt.hash(password, 12);
    const data = await Student.findByIdAndUpdate(id, {
      name,
      email,
      enrollment,
      phone,
      course,
      password: hashPass,
    });
    res.json({ data });
  } catch (err) {
    console.error("Error While Updating Data ", err);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const del = await Student.findByIdAndDelete(id);
    if (!del) return res.json({ msg: "Student Is Not Deleted!" });
    res.json({ del });
  } catch (err) {
    console.error("Error While Deleting Data ", err);
  }
};

export const allStudent = async (req, res) => {
  try {
    const data = await Student.find();
    if (!data) return res.json({ msg: "No Data Found" });
    res.json(data);
  } catch (err) {
    console.error("Error While Fetching Data ", err);
  }
};

export const singleStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Student.findById(id);
    if (!data) return res.json({ msg: "Student Is Not Found!" });
    res.json({ data });
  } catch (err) {
    console.error("Error While Fetching Data ", err);
  }
};
