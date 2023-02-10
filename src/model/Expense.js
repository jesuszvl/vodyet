const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    max: 255,
  },
  category: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  ammount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.Expense || mongoose.model("Expense", expenseSchema);
