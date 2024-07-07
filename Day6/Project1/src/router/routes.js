import express from 'express'
import controller from '../controller/controller.js'

const router = express.Router();

router.get('/',controller.home)
router.post('/show',controller.show)

export default router;
