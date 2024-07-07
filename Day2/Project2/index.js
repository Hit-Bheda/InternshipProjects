const express = require('express');
const app = express();
const port = 3000

const users = {
    Rudra:{name:"Rudra",Dipartment:"Computer",Age:18,Enroll:1},
    Nandan:{name:"Nandan",Dipartment:"Computer",Age:17,Enroll:2},
    Krishiv:{name:"Krishiv",Dipartment:"Computer",Age:16,Enroll:3},
    Jenish:{name:"Jenish",Dipartment:"Computer",Age:18,Enroll:4},

}

app.post('/:name',(req,res)=>{
    let isUserFound = false;
    for(let i in users){
        if(i == req.params.name){
            res.json(users[i])
            isUserFound = true;
        }
    }if(!isUserFound){
        res.sendStatus(404).json({msg:"User Not Found"})
    }
})

app.listen(port,(err)=>{
    if(err){
      console.log(`Error While Listning ${err}`)
    }else{
      console.log(`Listning On Port ${port}`);
    }
  })