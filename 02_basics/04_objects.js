// objects declaring with the help of constructor 

const AlgoHubUser = new Object() // it is singleton

AlgoHubUser.id = "123aBc"
AlgoHubUser.name = "sammy"
AlgoHubUser.isLoggedIn = false

console.log(AlgoHubUser);

const regularUser = {
    email:"some@gmail.com",
    fullName : {
        userfullname:{
            firstName : "deepak",
            lastName: "Raula"
        }
    }
}

console.log(regularUser);

console.log(regularUser.fullName.userfullname.firstName);


// combining objects

const obj1 = {
    1: "A",
    2: "B"
}

const obj2 = {
    3:"C",
    4:"D"
}

const obj3 = {...obj1, ...obj2} // spread operator
const obj4 = Object.assign({}, obj1,obj2)

console.log(obj3);
console.log(obj4);

const users = [
    {id:1,
    email: "h@gmail.com"
    },
    {id:2,
        email: "a@gmail.com"
    },
    {id:3,
        email: "p@gmail.com"
    }

]

console.log(users[0].email)

console.log(Object.keys(AlgoHubUser)); // returns arrays of keys

console.log(Object.values(AlgoHubUser)); // returns arrays of values

console.log(Object.entries(AlgoHubUser)); // returns arrays of entries just like itmes in dict (python)

console.log(AlgoHubUser.hasOwnProperty("isLoggedIn"));