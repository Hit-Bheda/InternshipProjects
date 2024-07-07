import express from 'express'
import path from 'path';
import dotenv from 'dotenv'
import connectDB from './db/index.js'
import routes from './routes/routes.js'
dotenv.config()

const app = express()

app.use('/',routes)
app.use(express.urlencoded())
app.set('view engine','ejs')
app.set("views",path.join('src',"views"))

connectDB().  
then(()=>{
 
app.listen(process.env.PORT,()=>{
  console.log("Listning On port ",process.env.PORT)
})
})
