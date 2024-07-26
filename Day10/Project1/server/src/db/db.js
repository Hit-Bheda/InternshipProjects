import mongoose from 'mongoose'
import config from '../config/config.js'

const connectDB = async () => {
  try{
    const connection = await mongoose.connect(config.dburi);
    console.log("Database Connected")
    return connection;
  } catch (err){
    console.error("Error While Conecting To Datqabase :",err)
  }
}

export default connectDB;
