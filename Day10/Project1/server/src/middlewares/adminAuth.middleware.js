import jwt from 'jsonwebtoken';
import config from '../config/config.js'
import admin from '../models/admin.model.js'

const adminAuth = async ( req, res, next ) => {
  if( req.cookies && req.cookies.token ){
    const check = await jwt.verify(req.cookies.token, config.secret)
    if(check){
      const data = await admin.findOne({_id:check.id})
      if(data){
        req.user = data
        next()
      }else{
        res.redirect('/admin/login')
      }
    } else{
      res.redirect('/admin/login')
    }
  } else{
    res.redirect('/admin/login')
  }
}

export default adminAuth;
