import jwt from 'jsonwebtoken';
import config from '../config/config.js'
import Student from '../models/student.model.js';

const adminAuth = async ( req, res, next ) => {
  if( req.cookies && req.cookies.studentToken ){
    const check = await jwt.verify(req.cookies.studentToken, config.secret)
    if(check){
      const data = await Student.findOne({_id:check.id})
      if(data){
        req.user = data
        next()
      }else{
        res.redirect('/student/login')
      }
    } else{
      res.redirect('/student/login')
    }
  } else{
    res.redirect('/student/login')
  }
}

export default adminAuth;
