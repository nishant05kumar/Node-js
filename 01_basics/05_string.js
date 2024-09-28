//  old CONCATINATION 

const  name = "nishant"
const Count = 50                // this is the old version of concatination 

//console.log(name + Count)

// NEW CONCATINATION 

//console.log(`my name is ${name} and my repo count is ${Count}`)     // new way of concatination 

const newGame = new String("Nishant-nt")         // making new string
//console.log(newGame)
// console.log(newGame[4])                        // to know the character place
// console.log(newGame.__proto__)
// console.log(newGame.length)
// console.log(newGame.toUpperCase())
// console.log(newGame.charAt(7))
// console.log(newGame.indexOf('n'))
const newString = newGame.substring(0,5)   // it will print n-1.  , starting should be zero always
//console.log(newString)

const anotherString = newGame.slice(-8,4)
//console.log(anotherString)
const newStringOne = "  nishant  "
//console.log(newStringOne)
//console.log(newStringOne.trim())

const url = "http://nishant.com/nishant%20kumar"
console.log(url.replace('%20','-puchi-'))               // we can replace in any thing 
console.log(url.includes('nis'))                  // to know that it is present or not in that

console.log(newGame.split('-'))

