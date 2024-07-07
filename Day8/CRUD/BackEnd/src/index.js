import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js'
import router from './routers/router.js'

dotenv.config()

const app = express()

app.use('/v1/',router)
app.use(express.urlencoded())

const port = process.env.PORT
connectDB()
.then(()=>{
  console.log("Database Connected Sucessfully")
})
.then(()=>{

  app.listen(port,(err)=>{
    if(err){
      console.error("Error While Listning ",err)
    }else{
      console.log("Listning On Port ",port)
    }
  })
})
.catch((err)=>{
  console.error("Error While Connecting To Database",err)
})
