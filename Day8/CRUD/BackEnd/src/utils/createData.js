import Student from '../models/main.model.js'

const createData = async (req) => {
   try{
     const responses = []

     for(let data of req){
        const { name, enrollment,email,phone,dipartment } = data;
        const response = await Student.create({name,enrollment,email,phone,dipartment})
        responses.push(response)
     }
    } catch (err){
    console.error("Error While Creating Data",err)
  }
}

export default createData;
