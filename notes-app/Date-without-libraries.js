const now = new Date()
const timeStamp = now.getTime()

const myDate = new Date(timeStamp)
console.log(timeStamp)


//console.log(`Year: ${now.getFullYear()}`)
//console.log(`Month: ${now.getMonth()}`)
//console.log(`Day: ${now.getDate()}`)
//console.log(`Hour: ${now.getHours()}`)
//console.log(`Minutes: ${now.getMinutes()}`)
//console.log(`Seconds: ${now.getSeconds()}`)

const date1 = new Date('may 26 1994 14:00:00')
const date2 = new Date('August 22 1996 14:00:00')
console.log(date1)

if(date1.getTime() > date2.getTime()){
    console.log(date1.toString())
    console.log(date1.getTime())
}
else if(date1.getTime() < date2.getTime()){
    console.log(date2.toString())
    console.log(date2.getTime())
}
else{
    console.log('WTF')
}