import UserModel from '../models/index.js'

const createData = async (data) => {
  try{
    const newData = await UserModel.create(data);
    console.log(newData)
  } catch (err){
    console.error("Error While Creating Data",err)
  }
}

export default createData;
