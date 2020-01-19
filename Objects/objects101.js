let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326,
    rating: '****'
}
console.log(`This is a book called ${myBook.title} by ${myBook.author}. It's got a ${myBook.rating} rating`)

myBook.title = 'Animal Farm'

console.log(`This is a book called ${myBook.title} by ${myBook.author}. It's got a ${myBook.rating} rating`)


// Challenge area

let person = {
    name: 'Härski Hartikainen',
    age: 49,
    vocation: 'Automekaanikko/keksijä/nero',
    bestFriends: 'Sörsselssön, Uuno',
    
}
console.log(person.age)
person.age = person.age+1
console.log(person.age)