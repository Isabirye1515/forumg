package com.forum.forumg;

import java.util.Collection;

public interface BookService {
    Collection<Expense> getBook();
    Expense addExpense(Expense expense);
    
}
