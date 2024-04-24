// array
const myArr = [0,1,2,3,4,5]

console.log(myArr);

// indexing

console.log(myArr[0]);

let newArray = new Array(5,6,7,8,9,10);
console.log(newArray[2]);

// array method
newArray.push(11);
console.log(newArray);

newArray.pop();
console.log(newArray);

// unshift : insert the new element at the start
newArray.unshift(4);
console.log(newArray);

// shift : remove element from the first position
newArray.shift();
console.log(newArray);

console.log(newArray.includes(8));

console.log(newArray.indexOf(8));

const newArr = newArray.join()

console.log(newArr);

console.log(newArray);

/*
slice vs splice
:selection of section 
slice doesn't change the og array
splice does change the og array by itself

*/



const n1 = myArr.slice(0,4);  // original arrays remains the same
console.log("A", myArr);
console.log(n1);


const n2 = myArr.splice(0,4); // it changes the real array
console.log("B", myArr);
console.log(n2);

