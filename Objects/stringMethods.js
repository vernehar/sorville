let name = '   Verne Hartikainen'

console.log(name.length)
console.log(name.toUpperCase())

//includes method
let password = 'ab123passwordperkele'
console.log(password.includes('password'))

//trim method

console.log(name.trim())

//Challenge area

let isValidPassword = function(password){
    if (password.length> 8 && password.includes('password')===false){
    return true
}
    else{
        return false
}}

console.log(isValidPassword('kalakukko112'))
console.log(isValidPassword('password123'))
console.log(isValidPassword('hetki'))
