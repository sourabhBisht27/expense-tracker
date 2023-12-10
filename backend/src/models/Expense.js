const { Schema, model, Types } = require("mongoose");
const ExpenseRepository = require("../repository/expense.repository");
const expenseSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  description: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 250,
  },
});
expenseSchema.loadClass(ExpenseRepository);
const Expense = model("Expense", expenseSchema);
module.exports = Expense;
