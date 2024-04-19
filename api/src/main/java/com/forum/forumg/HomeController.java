package com.forum.forumg;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.servlet.ModelAndView;


@Controller
public class HomeController {

    @Autowired
    private ExpenseService expenseService;

    @RequestMapping("/")
    public String goToHome() {
        return "home";
    }

    @GetMapping("/addBook")
    public String addExpense(Model model) {
        model.addAttribute("expense", new Expense());
        return "add-book";
    }

    @PostMapping("/result")
    public String saveExpense(@ModelAttribute("expense") Expense expense) {
        expenseService.saveOrUpdate(expense);
        return "view-book";
    }

    @GetMapping("/result")
    public ModelAndView viewExpenses(Model model) {
        List<Expense> expenses = expenseService.getAllExpenses();
        model.addAttribute("expenses", expenses);
        return new ModelAndView("view-book");
    }

    @GetMapping("/addBook/{id}")
    public String editExpense(@PathVariable("id") int id, Model model) {
        Expense expense = expenseService.getExpenseId(id);
        model.addAttribute("expense", expense);
        return "redirect:/";
    }

    @PostMapping("/result/{id}")
    public String updateExpense(@PathVariable("id") int id, @ModelAttribute("expense") Expense expense) {
        expense.setId(id);
        expenseService.saveOrUpdate(expense);
        return "redirect:/";
    }

    @GetMapping("/deleteExpense/{id}")
    public String deleteExpense(@PathVariable("id") int id) {
        expenseService.deleteExpenseById(id);
        return "redirect:/";
    }
}
