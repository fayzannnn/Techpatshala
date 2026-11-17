
import React, { useContext, useState } from "react";
import { BudgetContext } from "./App";

function AddExpense() {
  const { expenses, setExpenses } = useContext(BudgetContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      amount.trim() === "" ||
      Number(amount) <= 0
    ) {
      alert("Please enter a valid expense name and amount");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
    };

    setExpenses((prevExpenses) => [
      ...prevExpenses,
      newExpense,
    ]);

    setTitle("");
    setAmount("");
  };

  return (
    <div>
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Expense Name: </label>
          <input
            type="text"
            id="title"
            placeholder="e.g. Food"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="amount">Expense Amount: </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button type="submit">Add Expense</button>
      </form>

      <h3>Expense List</h3>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.title} — ₹{expense.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AddExpense;
