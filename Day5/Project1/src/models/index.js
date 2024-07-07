import mongoose from 'mongoose'

const UserModel = new mongoose.Schema({
  name:String,
  email:String,
  phone:Number,
  image:String
})

const Model = mongoose.model("UserModel",UserModel)

export default Model;
