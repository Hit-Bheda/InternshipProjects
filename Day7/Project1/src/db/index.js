import mongoose from 'mongoose';

const connectDB = async () => {
  try{
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log("Database Connected Sucessfully")
    return connection
  } catch (err) {
    console.error("Error While Connectiong To Database ",err)
  }
}

export default connectDB;
