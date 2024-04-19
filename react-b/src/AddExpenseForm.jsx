import React, { useState } from "react";
import axios from "axios";

function AddExpenseForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    amount: 0,
    category: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/expenses", formData);
      alert("Expense added successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        amount: 0,
        category: ""
      });
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;
