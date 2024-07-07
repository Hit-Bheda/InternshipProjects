import Test2 from '../models/index.js';
import connectDB from '../db/index.js'
const createData = async (data) => {
  try{
    const createdData = await Test2.create(data);
    return createdData
  } catch(err){
    console.error(`Error While Creating Data ${err}`)
  }
}

export default createData
