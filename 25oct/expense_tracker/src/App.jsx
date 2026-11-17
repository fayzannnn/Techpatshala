
import { createContext, useState } from "react";
import Setbudget from "./Setbudget";
import AddExpense from "./AddExpense";

export const BudgetContext = createContext();

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const remainingBudget = budget - totalExpense;

  return (
    <BudgetContext.Provider
      value={{
        budget,
        setBudget,
        expenses,
        setExpenses,
        totalExpense,
        remainingBudget,
      }}
    >
      <h1>Expense Tracker</h1>

      <Setbudget />

      <AddExpense />

      <h3>Total Expense: ₹{totalExpense}</h3>
      <h3>Remaining Budget: ₹{remainingBudget}</h3>
    </BudgetContext.Provider>
  );
}

export default App;
