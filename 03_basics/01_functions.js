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

// rest operators


function calculateShoppingCartPrice(...price){
    return price
}

console.log(calculateShoppingCartPrice(200,300,400,600,2000));

const user = {
    userName: "techy",
    price:199
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    userName: "Sam",
    price: 399
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue([100,200,300]));


