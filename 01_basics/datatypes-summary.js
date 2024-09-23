// PRIMITIVE

// 7 TYPES : String , Number , Boolean , Null , Undefined , Symbol , BigINT

const score = 100
const scoreValue = 59

const isLoggedIn = false
const temp = null         // null will return object    - typeof 
let userMail;

const id = Symbol('123')
const anotherId = Symbol('123')

const BigNumber = 5464738738457987876878766938n // using n means making it bigINT

//console.log(score, scoreValue, isLoggedIn, temp, userMail)
//console.log(id === anotherId)
//console.log(BigNumber)

// REFRENCE (NON-PRIMITIVE)

// Arrays , Objects , Functions

const baba = ["lalu ", "GD"]
let myObj = {
    name : 'Nishant',
    age : 21,
}
let myFunction = function() {         // function will return function.      - typeof
    console.log("hello world")
}
console.log(typeof score)
console.log(typeof scoreValue)
console.log(typeof id)
console.log(typeof anotherId)
console.log(typeof baba)
console.log(typeof myObj)
console.log(typeof myFunction)

