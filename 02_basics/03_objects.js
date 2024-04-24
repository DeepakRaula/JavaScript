// singleton: when you create from a constructor then it is known as singleton
// object.create method is used to create singleton
// object literals

const mySymbol = Symbol("key1")

const jsUser = {
    name: "Techy",
    age: 20,
    location: "Techy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [mySymbol]: "key1"
}

console.log(jsUser["age"]);
console.log(jsUser["location"]);
console.log([mySymbol]);


jsUser["email"] = "techy@gmail.com"

console.log(jsUser);


// creating and adding function inside a javascript object

jsUser.greetings = function(){
    console.log("Hello there! hope you are having a great day!")
    console.log(`${this.name}, its really nice to meet you!`)
}


console.log(jsUser);

console.log(jsUser.greetings());