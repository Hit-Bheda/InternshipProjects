import app from "./app.js";
import config from "./config/config.js";
import connectDB from "./db/db.js";

const server = async () => {
  try {
    await connectDB();
    app.listen(config.port, (err) => {
      if (err) {
        console.error("Error While Listning ", err);
      } else {
        console.log("Listning On Port ", config.port);
      }
    });
  } catch (err) {
    console.error("Eror While Starting server :", err);
  }
};

server();
