import User from '../models/main.model.js'
const main = {
  test: (req,res) => {
    res.status(200).json({msg:"API Is Working Fine"})
  },
  create: async (req,res) => {
    try{
      const { name, email, phone } = req.body
      const user = await User.create({ name, email, phone })
      console.log(User)
    } catch(err){
      console.error("Error While Creating Data",err)
    }
  }
}

export default main;
