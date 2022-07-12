import mongoose from "mongoose";

const connectToDatabase = () => {
  mongoose.connect(process.env.MONGO_URI).then((data) => {
    console.log(`Connected to host ${data.connection.name}`);
  });
};

export default connectToDatabase;
