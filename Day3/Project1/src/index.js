import express from 'express';
import connectDB from './db/index.js';
import Test from './models/index.js'
import dotenv from 'dotenv';
const app = express()

app.use(express.urlencoded())
dotenv.config();
connectDB().then(()=>{
  app.get('/',(req,res)=>{
    res.sendfile('src/views/index.html')
  })
  app.post('/addData',async (req,res) => {
  const userData = await Test.create(req.body) 
    res.send(userData);
})
  app.get('/showData',async (req,res)=>{
    const users = await Test.find();
    res.status(200).json(users)
  })

app.listen(process.env.PORT,(err)=>{
  if(err){
    console.error("Error While Listning",err)
  }else{
    console.log("Listning On Port ",process.env.PORT);
  }
})})

.catch((err)=>{
  console.error("Something Went Wrong ",err)
})


