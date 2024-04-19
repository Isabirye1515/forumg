import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseTable from './App'
import './i18n'
import reportWebVitals from './reportWebVitals';

// Instead of ReactDOM.render, use createRoot
import { createRoot } from 'react-dom';

// Your root component


// Find the root DOM node
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

// Render your app inside the root
root.render(<ExpenseTable />);
