import mongoose from "mongoose";

const connectDB = () => {
  const dbConnect = process.env.DB_CONNECT;

  mongoose.connect(
    dbConnect,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("connected to db")
  );
};

export default async function handler(req, res) {
  connectDB();
  const Expense = require("../../src/model/Expense");
  const expenses = await Expense.find();

  res.json({
    expenses,
  });
}
