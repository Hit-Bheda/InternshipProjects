import express from 'express';
import adminController from '../controllers/admin.controller.js'
import adminAuth from '../middlewares/adminAuth.middleware.js'

const adminRouter = express.Router();

adminRouter.get('/login',adminController.loginPage)
adminRouter.get('/register',adminController.registerPage)

adminRouter.post('/login',adminController.login)
adminRouter.post('/register',adminController.register)

adminRouter.get('/logout',adminController.logout)
adminRouter.get('/',adminAuth,adminController.home)

adminRouter.get('/addStudent',adminAuth,adminController.addStudentPage)
adminRouter.post('/addStudent',adminAuth,adminController.addStudent)
adminRouter.get('/showStudent',adminAuth,adminController.showStudent)

adminRouter.get('/delete/:id',adminAuth,adminController.deleteStudent)
adminRouter.get('/update/:id',adminAuth,adminController.updateStudent)
adminRouter.post('/updateStudentData/:id',adminAuth,adminController.updateStudentData)


adminRouter.all(adminController.all)

export default adminRouter;
