let tip=function(bill,tipPercent=20){
    tipPercent=tipPercent/100
    let total=bill*(tipPercent+1)
    
    return `A ${tipPercent*100}% tip on ${bill} dollars would be ${total}$ `
}

let howmuch = tip(666,32)
console.log(howmuch)