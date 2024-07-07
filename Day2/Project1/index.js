const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const routes = [
  {route:'/',msg: "This Is Home Page",filePath:'./views/home.html'},
  {route:'/about',msg: "This Is About Page",filePath:'./views/about.html'},
  {route:'/contact',msg: "This is Conatct Page",filePath:'./views/contact.html'}
]

const createApp = (item)=> {
  return app.get(item.route,(req,res)=>{
    res.sendfile(item.filePath)
  })
}

routes.map(createApp)

app.listen(port,(err)=>{
  if(err){
    console.log(`Error While Listning ${err}`)
  }else{
    console.log(`Listning On Port ${port}`);
  }
})