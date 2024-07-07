import Test2 from '../models/index.js';
import connectDB from '../db/index.js'
const showData = async (data) => {
  try{
    const data = await Test2.find();
    return data;
  } catch(err){
    console.error(`Error While Fetching Data Data ${err}`)
  }
}

export default showData
