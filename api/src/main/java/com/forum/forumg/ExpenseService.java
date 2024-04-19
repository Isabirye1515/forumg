package com.forum.forumg;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExpenseService {
@Autowired
private ExpenseRepository repository;
public Expense getExpenseId(int id){
    return repository.findById(id).get();
}
public List<Expense> getAllExpenses(){
    List<Expense> expenses = new ArrayList<>();
    repository.findAll().forEach(expense -> expenses.add(expense));
    return expenses;
}
public Expense saveOrUpdate(Expense expense){
    return repository.save(expense);
}
public void deleteExpenseById(int id){
repository.deleteById(id);
}
    
}

