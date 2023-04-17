import connectDB from "../../src/utils/db";
import Expense from "../../src/model/Expense";

export default async function handler(req, res) {
  connectDB();
  const expenses = await Expense.find();

  res.json({
    expenses,
  });
}
