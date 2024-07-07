import express from 'express'
import createData from '../utils/createData.js'
import showData from '../utils/showData.js'
const router = express.Router()

router.use(express.urlencoded())
router.get('/',(req,res) => {
 res.status(200).render('index') 
})

router.post('/create',async (req,res)=>{
  const data = await createData(req.body)
  res.redirect('/show')
})

router.get('/show',async (req,res)=>{
  const data = await showData();
  res.render("print",{data})
})

//router.post()
export default router
