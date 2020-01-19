let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326,
    rating: '****'
}

let otherBook = {
    title: 'Svenskar i krig',
    author: 'Hurri Pettersson',
    pageCount: 270,
    rating: '*****'
}

let getSummary = function(book){
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }

}

let bookSummary=getSummary(myBook)
let otherBookSummary=getSummary(otherBook)
console.log(bookSummary.pageCountSummary) 
