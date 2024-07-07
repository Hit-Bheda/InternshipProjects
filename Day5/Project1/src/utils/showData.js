import UserModel from '../models/index.js'

const showData = async () => {
  try{
    const data = UserModel.find();
    return data
  } catch (err){
    console.error("Error While Creating Data",err)
  }
}

export default showData;
