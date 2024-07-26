import mongoose from 'mongoose';


const StudentModel = new mongoose.Schema({
  name:String,
  enrollment:Number,
  email:String,
  phone:Number,
  dipartment:String
})

const Student = mongoose.model("Student",StudentModel)

export default Student;
