const accountId = 1244553
let accountEmail = "nishant@google.com"
var accountPassword = "12344"
var accountCity = "chandigarh"

/*
prefer not to use var 
bcz of in issues in block scope and functional scope

 */

accountEmail = "jfdh@google.com"
accountPassword = "4354345"
accountCity = "delhi"
accountId1 = 34343
let accountState 

/* 
will use let!!


*/


console.log(accountId)    // to print individual
console.table({accountEmail, accountCity , accountPassword,accountId1,accountState}) // to print in form of table
