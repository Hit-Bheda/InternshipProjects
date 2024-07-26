import express from 'express';
import mainController from '../controllers/main.controller.js'
import bodyParser from 'body-parser'

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/test',mainController.test)
router.post('/createData',mainController.createData)
router.post('/readData',mainController.readData)
router.post('/updateData',mainController.updateData)
router.post('/deleteData',mainController.deleteData)

export default router;
