import dotenv from 'dotenv';

dotenv.config()

const config = {
  port: process.env.PORT || 4000,
  dburi: process.env.MONGODB_URI,
  secret: process.env.JWT_SECRET
}

export default config;
