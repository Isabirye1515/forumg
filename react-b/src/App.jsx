import React from "react";
import Axios from "axios";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { useState, useEffect } from 'react';

function ExpenseTable() {
    const [expenses, setExpenses] = useState([]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        Axios.get("http://localhost:8080/api/expenses/result")
            .then((response) => {
                setExpenses(response.data);
            })
            .catch((error) => {
                console.error("Error fetching expense data: ", error);
            });
    };

    const [press, setPress] = useState(false);

    const handlePress = () => {
        setPress(!press);
    };

    const langs = {
        en: { title: "English" },
        lug: { title: "Luganda" } 
    };

    return (
        <div>
            <button onClick={handlePress}>
                Language
            </button>
            {press && (
                <ul>
                    
                    {Object.keys(langs).map((lang) => (
                        
                        <ul key={lang}>
                            <button onClick={() => i18n.changeLanguage(lang)}>
                                {langs[lang].title}
                            </button>
                        </ul>
                        
                    ))}
                    
                </ul>
            )}
            <table>
                <thead>
                    <tr>
                        <th>{t('main.id')}</th>
                        <th>{t('main.firstName')}</th>
                        <th>{t('main.lastName')}</th>
                        <th>{t('main.amount')}</th>
                        <th>{t('main.category')}</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.id}</td>
                            <td>{expense.firstName}</td>
                            <td>{expense.lastName}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function WrappedApp() {
    return (
        <Suspense fallback="...loading">
            <ExpenseTable />
        </Suspense>
    );
}

