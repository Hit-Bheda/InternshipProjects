import express from 'express'
import router from './router/routes.js'
import path from "path"
const app = express();

const port = 3000;

app.set("view engine","ejs")
app.set("views",path.join("src","views"))

app.use(express.urlencoded())
app.use('/',router)

app.listen(port,(err)=>{
  if(err){
    console.log("Error While Listning ",err)
  } else{
    console.log("Listning On Port ",port)
  }
})
