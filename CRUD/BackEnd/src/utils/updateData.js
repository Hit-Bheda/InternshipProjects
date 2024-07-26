import Student from '../models/main.model.js'

const updateData = async (req) => {
   try{
     const responses = []

     for(let data of req){
        const {_id, name, enrollment,email,phone,dipartment } = data;
        const response = await Student.findOneAndUpdate({ _id },{ name, enrollment, email, phone, dipartment },{ new: true })
        responses.push(response)
     }
     return responses
    } catch (err){
    console.error("Error While Creating Data",err)
  }

}

export default updateData;
