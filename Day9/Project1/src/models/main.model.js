import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name:String,
  email:String,
  phone:Number
})

const UserModel = mongoose.model("Users",User)

export default UserModel;
