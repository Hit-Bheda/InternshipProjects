import Admin from '../models/admin.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'
import Student from '../models/student.model.js'

const adminController = {

  loginPage: ( req, res ) => {
    res.status(200).render("login")
  },

  registerPage: (req, res) => {
    res.status(200).render("register")
  },

  register: async (req,res) => {
    const { name, email, password } = req.body;
    const check = await Admin.findOne({email})
    if(check){
      console.log("Email Exists")
      res.redirect('back')
    }else{
      const hashPass = await bcrypt.hash(password,12)
      const data = await Admin.create({ name, email, password: hashPass })
      res.status(200).redirect('/admin/login');
    }
  },

  login: async ( req, res ) => {
    const { email, password } = req.body;
    const data = await Admin.findOne({email})
    if(data){
      const isMatch = await bcrypt.compare( password, data.password )
      if(isMatch){
        const token = jwt.sign({id:data.id},config.secret)
        res.cookie("token", token).redirect('/admin');
      }
    }else{
      res.redirect('back')      
    }
  },
  home: (req,res) => {
    const user = req.user
    res.render("index",{user})
  },
  logout: (req,res) => {
    res.clearCookie('token').redirect('/admin/login')
  },

  all: ( req, res ) => {
    res.status(404).json({msg: "Page Not Found"})
  },

  addStudentPage: (req,res) => {
    res.render("form")
  },

   addStudent: async (req,res) => {
      console.log(req.body)
      const { name, email, phone, enrollment, course, semester, password } = req.body;
      const hashPass = await bcrypt.hash(password,12)
      const user = await Student.create({ name, email, phone, enrollment, course, semester, password:hashPass })
      res.status(200).redirect('/admin/showStudent')
    },
    showStudent: async (req,res) => {
      const users = await Student.find({})
      res.render("table",{users})
    },

    deleteStudent: async (req,res) => {
      const { id } = req.params
      await Student.findByIdAndDelete(id)
      res.redirect('/admin/showStudent')
    },

    updateStudent : async (req,res) => {
      const { id } = req.params
      const data = await Student.findById(id)
      // console.log(data)
      res.render("update",{data})
    },
    updateStudentData: async (req,res) => {
      const id = req.params.id
      const {  name, email, phone, enrollment, course, semester, password } = req.body;
      const hashPass = await bcrypt.hash(password,12)
      const data = await Student.findByIdAndUpdate(id, { name, email, phone, enrollment, course, semester, password:hashPass })
      console.log(req.params.id);
      res.redirect('/admin/showStudent')
    },
}

export default adminController
