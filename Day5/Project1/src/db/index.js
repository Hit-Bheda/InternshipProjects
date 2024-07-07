import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log("Database Connection Sucess")
  } catch (err){
    console.error("Erroe While Connecting To Database ",err)
  }
}

export default connectDB;
