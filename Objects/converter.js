let converter = function(degree){
    return{
        fahrenheit:degree*(9/5)+32,
        kelvin:274+degree
    }
}
console.log(converter(50).fahrenheit)