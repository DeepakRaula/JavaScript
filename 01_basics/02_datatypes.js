"use strict";
/*
data types in javascript:
1) NULL: value defined to be null
2) undefined: variable declared but not assigned
3) Number: a numeric data type
4) BigInt:
          The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude.
         With BigInts, you can safely store and operate on large integers even beyond the safe integer limit 
         (Number.MAX_SAFE_INTEGER) for Numbers.
5) Boolean: its either true or false
6) String: its a sequence and list of charachters
7) Symbol: The JavaScript ES6 introduced a new primitive data type called Symbol. 
           Symbols are immutable (cannot be changed) and are unique.

*/


// declaring null data type
let workDone = null;
console.log(typeof workDone);


// undefine datatype
let city;


// Its numeric data type
let num = 67; 


//bigInt

const y = BigInt(Number.MAX_SAFE_INTEGER)
const z = BigInt(Number.MIN_SAFE_INTEGER)

console.table([y,z]);


// string data type
let Username = "Deepak"; // It is string data type 
console.log(typeof Username);


//
let isLoggedIn = true; // Its boolean data type



console.table([Username,num,isLoggedIn,city,workDone])



// declaring symbol

const x = Symbol()

console.log(typeof x); // symbol

// print and access symbols

const m = Symbol('hey');
console.log(m);

// comparing two different symbols

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false


// most important note

console.log(typeof null);  // o/p: object
console.log(typeof undefined); // o/p: undefined