let score = "33"

console.log(score);
console.log(typeof score);
 
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*


datatypes to Numeric conversion
 I/P    O/P 
"33" => 33
"33abc" => NaN
true => 1
false => 0
"deepak" => NaN
null => 0

*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*


datatypes to Boolean conversion
 I/P    O/P 
"" => false
"hello" => true
1 => true
0 => false
"deepak" => NaN
null => 0

*/

let someNumber = 33
let strNumber = String(someNumber);
console.log(typeof strNumber);
console.log(strNumber);