let add = function(a, b, c){
    return a+b+c
}
let result = add(1,2,3)
console.log(result)

// Default arguments
let getScoreText = function(name='Anon',score = 0){
    return 'Name:'+name+'---- Score:',score
}
let testi=getScoreText('Jussi', 8)
console.log(testi)