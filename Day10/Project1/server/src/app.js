import express from 'express';
import bodyParser from 'body-parser';
import adminRouter from './routers/admin.router.js'
import studentRouter from './routers/student.router.js'
import errorHandler from './utils/errorHandler.util.js'
import path from 'path'
import cookieParser from 'cookie-parser'

const app = express()

app.set("view engine","ejs")
app.set("views",path.join("src","views"))

app.use(cookieParser())
app.use(express.static("assets"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/admin',adminRouter)
app.use('/student',studentRouter)

app.all('*',( req, res ) => {
  res.status(404).json({msg: "Page Not Found"})
})

app.use(errorHandler)

export default app;
