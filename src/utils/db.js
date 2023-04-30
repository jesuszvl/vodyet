import mongoose from "mongoose";

const connectDB = () => {
  const dbConnect = process.env.DB_CONNECT;

  mongoose.connect(
    dbConnect,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("Connected to MongoDB!")
  );
};

export default connectDB;
