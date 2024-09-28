const score = 100
//console.log(score)

const balance = new Number(200)
//console.log(balance)

//console.log(balance.toString().length)      // you can change the datatype by using this keyword.
//console.log(balance.toFixed(2))            // to get the value after the point 

const otherNumber = 23.890
//console.log(otherNumber.toPrecision(3) )    // it's very important and done it very attentively 

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'))     //will make the no, in proper form ,it will set according 
                                                //to the indian number system by using en-IN


// +++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++


// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))     // it means zara sa bhi main se bada then round off to next no.
// console.log(Math.floor(4.6))     
// console.log(Math.min(2,4,5,7))    
// console.log(Math.max(2,4,5,7))  


console.log(Math.random())    // values comes in 0 to 1
 console.log((Math.random()*10)+1 )    // so that value 0 na aaye toh 1 ko add kr diya

 console.log(Math.floor(Math.random()*10)+1 )
console.log(Math.ceil(Math.random()*10)+1 )

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //  +1 taaki 0 nah ho jaae and end mae min kuki value > ho usse
console.log(Math.ceil(Math.random() * (max - min + 1)) + max) 






