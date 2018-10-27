const account = {
  name: 'Nate Stephens',
  income: [],
  expenses: [],
  addIncome(desc, amount) {
    this.income.push({
      description: desc,
      amount: amount,
    });
  },
  addExpense(desc, amount) {
    this.expenses.push({
      description: desc,
      amount: amount,
    });
  },
  getAccountSummary() {
    let totalIncome = 0;
    let totalExpenses = 0;
    let accountBalance = 0;
    this.income.forEach(function(inc) {
      totalIncome += inc.amount;
    });
    this.expenses.forEach(function(exp) {
      totalExpenses += exp.amount;
    });
    accountBalance = totalIncome - totalExpenses;
    // prettier-ignore
    return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
  },
};

account.addIncome('Job', 1000);
account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
console.log(account.getAccountSummary());
