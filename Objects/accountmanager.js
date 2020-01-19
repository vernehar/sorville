let myAccount = {
    name: 'Verne Hartikainen',
    expenses: 0,
    income: 0,
}

let addExpense = function(account, amount){
    account.expenses = account.expenses + amount
}
let addIncome = function(account, amount){
    account.income = account.income + amount
}
let resetAccount = function(account){
    account.name = undefined
    account.expenses = 0
    account.income = 0
}
let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has ${account.income}$ of income and ${account.expenses}$ of expenses and
    a balance of ${balance}$`

}

addExpense(myAccount,100)
addIncome(myAccount,1000)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
addExpense(myAccount,100)
addIncome(myAccount,1000)
myAccount.name = 'Pekka'
console.log(getAccountSummary(myAccount))