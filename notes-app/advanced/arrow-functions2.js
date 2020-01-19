const add =  () =>{
    return arguments[0] + arguments[1]
}

console.log(add(11,33,44,55))

const car = {
    color: 'Red',
    getSummary: () => {
        return this.color
    }
}

console.log(car.getSummary())