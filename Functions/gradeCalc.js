let gradecalc = function(score, maxScore){
    let percentage = score/maxScore
    percentage=percentage*100
    let Alimit = 90
    let Blimit = 80
    let Climit = 70
    let Dlimit = 60
    let article = 'a'
    if (percentage>Alimit){
        grade = 'A'
    }
    else if (percentage > Blimit && percentage < Alimit){
        grade = 'B'
        
    }
    else if (percentage > Climit && percentage < Blimit){
        grade = 'C'
        
    }
    else if (percentage > Dlimit && percentage < Climit){
        grade = 'D'
        
    }
    else{
        grade='F'
    }
    if (grade === 'A' || grade ==='F'){
        article='an'
    }
    else{
        article='a'
    }
    return `My nigga you scored ${article} ${grade} with ${percentage}%`
    
}

let ExamResult = gradecalc(10,100)
console.log(ExamResult)