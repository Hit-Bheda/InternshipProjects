import Student from '../models/main.model.js'

const deleteData = async (req) => {
   try{
     const responses = []

     for(let data of req){
        const { _id } = data;
        const response = await Student.findByIdAndDelete({_id})
        responses.push(response)
     }
     return responses
    } catch (err){
    console.error("Error While Creating Data",err)
  }
}

export default deleteData;
