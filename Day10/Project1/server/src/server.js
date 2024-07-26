import app from './app.js';
import connectDB from './db/db.js';
import config from './config/config.js';

const startServer = async () => {
  try{
    await connectDB();

    app.listen(config.port,(err) => {
      if(err){
        console.log("Error While Listning :",err)
      } else{
        console.log("Listning On Port ",config.port)
      }
    })
  } catch(err){
    console.error("Error Whille Starting Server")
  }
}

startServer();
