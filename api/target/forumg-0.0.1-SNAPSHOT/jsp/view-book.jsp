<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<html>
<head>
    <style>
        label {
            background-color: indigo;
            color: rgb(169, 147, 189);
        }

        h1 {
            color: yellow;
        }
    </style>
    <title>View Expenses</title>
</head>
<body>
    <div>
        <h1>The Results....</h1>
        <c:forEach var="expense" items="${expenses}">
            <label for="id">${expense.id}</label><br><br>
            <label for="firstName">${expense.firstName}</label><br><br>
            <label for="lastName">${expense.lastName}</label><br><br>
            <label for="amount">${expense.amount}</label><br><br>
            <label for="category">${expense.category}</label><br><br>
        </c:forEach>
        <div>
            <button><a href="/"><---back home</a></button>
        </div>
    </div>
</body>
</html>
