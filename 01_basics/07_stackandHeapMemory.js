/*

1) All the primitive data types are stored in stacks
    > duplicate variable in created if assigned to another
    >  both variables hae different refrence
    >  any change in any properties of on one variable will not reflect onto another 

2) All the non -primitive (referenced) data type are stored in heaps
    > duplicate variable is created but to the same reference object
    > any change in any properties of object on one variable will reflect onto another.

*/

// data stored in stack
let myNum1 = 23
let myNum2 = myNum1

myNum2 = 7

console.log(myNum1);
console.log(myNum2);

// object stored in Heap

const myUser1 = {
    UserName : "techy",
    UserEmail : "techy@gmail.com"
}

const myUser2 = myUser1

myUser2.UserEmail = "techy999@gmail.com"


console.log(myUser1);       // both the value gets updated
console.log(myUser2);       // both the value gets updated


console.table([myUser1,myUser2])