import express from 'express'
import controller from '../controllers/main.controller.js'
import bodyParser from 'body-parser'
const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded())

router.get('/test',controller.test)
router.post('create',controller.create)

export default router
