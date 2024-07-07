import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  }
})
const Test = mongoose.model("Test",userSchema);

export default Test;
