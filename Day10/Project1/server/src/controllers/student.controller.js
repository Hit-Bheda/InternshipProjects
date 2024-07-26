import Admin from '../models/admin.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'
import Student from '../models/student.model.js'
// import Student from '../models/student.model.js'

const studentController = {

  loginPage: ( req, res ) => {
    res.status(200).render("studentLogin")
  },

  login: async ( req, res ) => {
    const { email, password } = req.body;
    const data = await Student.findOne({email})
    if(data){
      const isMatch = await bcrypt.compare( password, data.password )
      if(isMatch){
        const token = jwt.sign({id:data.id},config.secret)
        res.cookie("studentToken", token).redirect('/student');
      }
    }else{
      res.redirect('back')      
    }
  },
  home: (req,res) => {
   res.render("studentHome",{Student:req.user})
  },
  logout: (req,res) => {
   res.clearCookie('studentToken').redirect('/student/login')
  },
  
  all: ( req, res ) => {
   res.status(404).json({msg: "Page Not Found"})
  },
   updateStudent : async (req,res) => {
     const { id } = req.params
     const data = await Student.findById(id)
     res.render("updateStudent",{data})
   },
   updateStudentData: async (req,res) => {
     const id = req.params.id
     const {  name, email, phone, enrollment, course, semester, password } = req.body;
     const hashPass = await bcrypt.hash(password,12)
     const data = await Student.findByIdAndUpdate(id, { name, email, phone, enrollment, course, semester, password:hashPass })
     res.redirect('/student/')
   },
}

export default studentController
