let julia = {
    name: 'Julia',
    age: 22,
    Occupation: 'Salesperson',
    Education: 'BBA',
    Boyfriend: 'Verne'
}
let juliafunktio = function(person){
    return `${person.name} is ${person.age} and her occupation is ${person.Occupation}. Her
    education level is ${person.Education} and her boyfriend's name is ${person.Boyfriend}`
}
let idx=0
while (idx < 6){
    idx=idx+1
let index = 0
console.log(juliafunktio(julia))
if (index =5){
    julia.Education = 'MBA'
    index = index+1
}
console.log(juliafunktio(julia))

if (julia.Education === 'MBA'){
    console.log('Gongrats julia for getting an MBA!')
}
}