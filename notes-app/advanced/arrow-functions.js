const square = (num) => {
    return num*num
}

const people = [{
    name: 'andrew',
    age: 28},
    {
    name: 'verne',
    age: 25},
    {name: 'jussi',
    age: 35
    }]



const under30 = people.filter((person) => person.age < 30)

console.log(under30)

const age25 = people.filter((person) => person.age === 25)

console.log(age25)