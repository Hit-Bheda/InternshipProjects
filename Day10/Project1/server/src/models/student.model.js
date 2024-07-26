import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    enrollment:String,
    course:String,
    semester:String,
    password:String,
});

const Student = mongoose.model("Student",studentSchema)

export default Student;
