import createData from '../utils/createData.js';
import readData from '../utils/readData.js';
import updateData from '../utils/updateData.js';
import deleteData from '../utils/deleteData.js';

const mainController = {
  test: (req,res) => {
    res.status(200).json({msg:"API Is Working Fine"})
  },
  createData: async (req,res) => {
    try{
      const data = await createData(req.body)
      res.status(200).json({msg:"Data Inserted Sucessfully"});
    }catch (err){
      console.error('Error Whille Creting Data')
    }
  },
  readData: async (req,res) => {
    try{
      const data = await readData();
      res.status(200).json(data);
    }catch (err){
      console.error('Error Whille Reading Data')
    }
  },
  updateData: async (req,res) => {
    try{
      const data = await updateData(req.body)  
      res.status(200).json({msg:"Data Updated Sucessfully"})
    }catch (err){
      console.error('Error Whille Updating Data')
    }
  },
  deleteData: async (req,res) => {
    try{
      const data = await deleteData(req.body)  
      res.status(200).json({msg:"Data Deleted Sucessfully"})
    }catch (err){
      console.error('Error Whille Deleting Data')
    }
  },

}

export default mainController;
