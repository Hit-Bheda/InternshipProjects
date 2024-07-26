import mongoose from "mongoose";
import config from "../config/config.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.dbUri);
    console.log("Database Connected Sucessfully");
  } catch (err) {
    console.error("Error While Connecting To Database");
  }
};

export default connectDB;
