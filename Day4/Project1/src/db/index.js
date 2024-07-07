import mongoose from 'mongoose';

const connectDB = async () => {
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Databasen Is Connected Sucessfully");
  } catch (err) {
    console.error(`Error While Connecting To MongoDB ${err}`);
  }
}

export default connectDB;
