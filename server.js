import mongoose from "mongoose";
import _ from "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

/* Connecting to the database and then starting the server. */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => 
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err));