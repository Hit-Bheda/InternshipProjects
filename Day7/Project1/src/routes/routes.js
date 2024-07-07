import express from 'express';
import controller from '../controllers/main.controller.js'
const routes = express.Router()

routes.get('/',controller.home)
routes.post('/addData',controller.add)


export default routes
