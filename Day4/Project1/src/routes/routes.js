import express from 'express';
import createData from '../utils/createData.js';
import showData from '../utils/showData.js';
import path from 'path';
const router = express.Router();
//router.use(express.urlencoded())

router.use(express.json())
router.get('/',(req,res) => {
  res.sendfile(path.join('routes','../src/views/index.html'))
})

router.post('/addData',async (req,res)=>{
  try {
    const createdData = await createData(req.body)
    res.status(200).json(createdData)
  } catch (err){
    console.error("Error While Creating Data")
  }
})

router.get('/showData',async (req,res)=>{
  try{
    const data = await showData();
    res.json(data)
  } catch (err) {
    console.error("Error While Fetching Data".err)
  }
})
export default router;
