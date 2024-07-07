import express from 'express';
import routers from './routes/routes.js';
import Test2 from './models/index.js';
import connectDB from './db/index.js'
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(express.urlencoded())

connectDB().then(()=>{
  app.use('/',routers)


  app.on('error',(error)=>{
    console.log("Error While Listning ",error)
  })
  app.listen(process.env.PORT,(err)=>{
    console.log('Listning On Port',process.env.PORT) 
  })
})
.catch((err)=>{
  console.error()
})
