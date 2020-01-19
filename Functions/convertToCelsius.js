// Convert fahrenheit to celsius

let tempConverter = function (temp){
    let result = (temp-32)/1.8
    return result
}

let lampotila = tempConverter(32)
console.log(lampotila)