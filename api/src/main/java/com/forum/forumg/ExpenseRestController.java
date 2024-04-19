
package com.forum.forumg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseRestController {

    @Autowired
    private ExpenseService expenseService;
@CrossOrigin
    @GetMapping("/result")
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }
@CrossOrigin
    @GetMapping("/get/{id}")
    public Expense getExpenseById(@PathVariable("id") int id) {
        return expenseService.getExpenseId(id);
    }
@CrossOrigin
    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        return expenseService.saveOrUpdate(expense);
    }
@CrossOrigin
    @PutMapping("/put/{id}")
    public Expense updateExpense(@PathVariable("id") int id, @RequestBody Expense expense) {
        expense.setId(id);
        return expenseService.saveOrUpdate(expense);
    }
 @CrossOrigin
    @DeleteMapping("/delete/{id}")
    public void deleteExpense(@PathVariable("id") int id) {
        expenseService.deleteExpenseById(id);
    }
}

