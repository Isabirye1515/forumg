import React, { useEffect, useState } from "react";

function Result({ id }) { // Receive id as a prop
    const [expense, setExpense] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost/api/expenses/get/${id}`, { // Use id in the URL
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setExpense(data); // Assuming the response data is in the expected format
                } else {
                    console.error("Error:", response.statusText);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, [id]); // Add id as a dependency to useEffect

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th><b>Identification NO</b></th>
                        <th><b>First Name</b></th>
                        <th><b>Last Name</b></th>
                        <th><b>Amount</b></th>
                        <th><b>Category</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{expense.id}</td>
                        <td>{expense.firstName}</td>
                        <td>{expense.lastName}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Result;
