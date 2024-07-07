import mongoose from 'mongoose';

const connectDB = async () => {
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log("Database Connected Sucessfully")
  } catch(err) {
    console.log("Error While Connecting To Database ",err)
  }
}
export default connectDB;
