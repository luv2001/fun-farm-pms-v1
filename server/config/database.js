import mongoose from "mongoose";

// TODO : getting this URI from .env file
const connectToDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://dbfun:dbfun@cluster0.bpixr.mongodb.net/?retryWrites=true&w=majority"
      // "mongo://localhost:27017/test-test-funfarm"
    )
    .then((data) => {
      console.log(`Connected to host ${data.connection.name}`);
    });
};

export default connectToDatabase;
