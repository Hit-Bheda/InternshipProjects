import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  username:{
    type:String,
    require:true
  },email: {
    type:String,
    require:true
  },password: {
    type:String,
    require:true
  }
})

const Test2 = mongoose.model("Test2",Schema)

export default Test2
