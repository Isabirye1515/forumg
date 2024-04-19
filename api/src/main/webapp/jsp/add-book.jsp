 <%@ page contentType="text/html; charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
    <form action="/result"  method="post"  >
        <b> your id       :</b><input type="number" name="id" path="id"><br/><br/>
        <b>your first name:</b><input type="text" name="firstName" path="firstName" /><br/><br/>
        <b>your last name :</b><input type="text" name="lastName" path="lastName" /><br/><br/>
        <b>your amount    :</b><input type="number" name="amount" path="amount" /><br/><br/>
        <b>your category:</b><input type="text" name="category" path="category" /><br/><br/>
        <input type="submit" value="submit">
</form>
    </div>
</body>
</html>