import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}`)
    return connection
  } catch(err){
    console.error("Error Whille Connecting To Database:",err)
  }
}

export default connectDB;
