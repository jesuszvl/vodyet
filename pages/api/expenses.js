import connectDB from "../../src/utils/db";
import Expense from "../../src/model/Expense";

export default async function handler(req, res) {
  connectDB();
  if (req.method === "GET") {
    const expenses = await Expense.find({ userId: req.query.userId });
    res.json({ expenses });
  } else if (req.method === "POST") {
    const { userId, description, ammount, category } = req.body;
    const expense = new Expense({
      userId,
      description,
      ammount,
      category,
    });
    await expense.save();
    res.status(201).json({ message: "Expense created successfully!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
