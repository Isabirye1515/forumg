import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewExpense() {
  const [expense, setExpense] = useState(null);

  useEffect(() => {
    async function fetchExpense() {
      try {
        const response = await axios.get("http://localhost:8080/result");
        setExpense(response.data);
      } catch (error) {
        console.error("Error fetching expense:", error);
      }
    }
    fetchExpense();
  }, []);

  return (
    <div>
      <h2>Expense Details</h2>
      {expense && (
        <div>
          <p>ID: {expense.id}</p>
          <p>First Name: {expense.firstName}</p>
          <p>Last Name: {expense.lastName}</p>
          <p>Amount: {expense.amount}</p>
          <p>Category: {expense.category}</p>
        </div>
      )}
    </div>
  );
}

export default ViewExpense;
