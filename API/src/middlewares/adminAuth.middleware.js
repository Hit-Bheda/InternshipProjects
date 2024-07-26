import jwt from "jsonwebtoken";
import config from "../config/config.js";
import { Admin } from "../models/admin.model.js";

export const adminAuth = async (req, res, next) => {
  if (req.headers.token) {
    const check = jwt.verify(req.headers.token, config.secret);
    console.log(check);
    if (!check) return res.json({ msg: "Invalid Token!" });
    const data = await Admin.findById(check.id);
    if (!data) return res.json({ msg: "Admin Not Found" });
    req.user = data;
    next();
  } else {
    res.status(500).json({ msg: "Header Not Found" });
  }
};
