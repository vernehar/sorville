const account = {
    name: 'Verne Hartikainen',
    expenses: [],
    income: [],
    addExpense: function(desc, amount){
        this.expenses.push({description:desc,amount:amount})
        

    },
    addIncome: function(desc, amount){
        this.income.push({description:desc,amount:amount})
    },
    getAccountSummary: function(){
        
        const ExpArr = this.expenses
        const IncArr = this.income

        let expenseArrSum = 0
        let incomeArrSum = 0
        
        for (let i=0; i < ExpArr.length; i++ ){
            expenseArrSum = expenseArrSum + this.expenses[i].amount
        }
        for (let idx=0; idx < IncArr.length; idx++){
            incomeArrSum = incomeArrSum + this.income[idx].amount
        }
        return `Account of ${this.name} has a balance of ${incomeArrSum - expenseArrSum}. $${incomeArrSum} in income and $${expenseArrSum} in expenses.`
        }          
    
}

//Expense -> description, amount
//addExpense -> Description and ammout to expense
//getAccountSummary -> total up all expenses -> Verne Hartikainen has $ 1050 in expenses.'


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
