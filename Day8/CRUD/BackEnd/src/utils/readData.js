import Student from '../models/main.model.js'

const readData = async () => {
   try{
        const response = await Student.find()
        return response;
    } catch (err){
    console.error("Error While Creating Data",err)
  }
}

export default readData;
