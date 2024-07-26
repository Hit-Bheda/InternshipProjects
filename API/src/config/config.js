import dotenv from "dotenv";

dotenv.config();

const config = {
  dbUri: process.env.DB_URI,
  port: process.env.PORT,
  secret: process.env.SECRET,
};

export default config;
