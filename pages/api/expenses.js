import connectDB from "../../src/utils/db";
import Expense from "../../src/model/Expense";

export default async function handler(req, res) {
  connectDB();
  console.log(req.query.userId);
  const expenses = await Expense.find({ userId: req.query.userId });

  res.json({
    expenses,
  });
}
