import express from 'express';
import dotenv from "dotenv"
import path from 'path'
import routes from './routes/routes.js'
import connectDB from './db/index.js'

dotenv.config()

const app = express()

app.use(express.urlencoded())
app.use('/',routes)

app.set('view engine','ejs')
app.set("views",path.join("src","views"))

connectDB()
.then(()=>{
  app.listen(process.env.PORT,(err)=>{
    if(err){
      console.error("Erro While Listning ",err)
    }else{
      console.log("Listning On Port ",process.env.PORT)
    }
  })
})
