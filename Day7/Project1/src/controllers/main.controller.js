import User from '../models/index.js' 

const mainController = {
  home: (req,res) => {
    res.render("index")
  },
  add:async (req,res) => {
    const data = await User.create({name:req.body.name,email:req.body.email,enrollment:req.body.enrollment})
    res.json(data)
  }
}

export default mainController
