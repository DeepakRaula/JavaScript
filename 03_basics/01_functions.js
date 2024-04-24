// javascript function

/*

javascript is like a package or a block of code that has certain functionality
it can be reused as many times as u want over different places

*/

/* declaration of function:

function functionName(para1 , para2, ...){
    code..
    code..
}

function calling:

functionName(arg1, arg2, ...)

*/

function AddTwoNumber(number1, number2){
    let result = number1 + number2
    return result;
}

const result = AddTwoNumber(3,5);

console.log("Result: ", result);


function loginUserMessage(userName){
    if(!userName){
        console.log("Please enter a user Name: ");
    }
    return `${userName} just Logged in`
}

console.log(loginUserMessage("Techy"))


//default value : default name user1 is picked up

function loginUserMessage(userName="user1"){
    return `${userName} just Logged in`
}

console.log(loginUserMessage())

