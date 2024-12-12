const accountId = 144553
let accountEmail = "TEJAS@google.com"
var accountPassword = "12345"
accountCity = "PUNE"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "MUMBAI"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//This line logs a formatted table in the console displaying the values of the array
//  [accountId, accountEmail, accountPassword, accountCity, accountState], with each value listed as a row under an indexed column.