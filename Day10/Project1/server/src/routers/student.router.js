import express from 'express';
import studentController from '../controllers/student.controller.js'
import adminAuth from '../middlewares/adminAuth.middleware.js'
import studentAuth from '../middlewares/studentAuth.middleware.js'

const studentRouter = express.Router();

studentRouter.get('/login',studentController.loginPage)
//studentRouter.get('/register',studentController.registerPage)
//
studentRouter.post('/login',studentController.login)
//studentRouter.post('/register',studentController.register)
studentRouter.get('/update/:id',studentAuth,studentController.updateStudent)
studentRouter.post('/updateStudentData/:id',studentAuth,studentController.updateStudentData)


studentRouter.get('/logout',studentController.logout)
studentRouter.get('/',studentAuth,studentController.home)

studentRouter.all(studentController.all)

export default studentRouter;
