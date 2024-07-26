import express from 'express'
import dotenv from 'dotenv'
import router from './routers/router.js'
import connectDB from './db/index.js'
dotenv.config();

const app = express()

app.use('/v1',router)
connectDB()
.then(()=>{
  console.log("Database Connectes Sucessfully")
})
.then(()=>{

  app.listen(process.env.PORT,(err)=>{
    if(err){
      console.error("Error While Listning",err)
    } else{
      console.log("Listning On Port",process.env.PORT)
    }
  })
})
