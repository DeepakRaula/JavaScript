let myDate = new Date();

console.log(myDate.toString()); // Wed Apr 24 2024 07:37:21 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Wed Apr 24 2024
console.log(myDate.toISOString()); //2024-04-24T07:37:21.589Z
console.log(myDate.toJSON()); // 2024-04-24T07:37:21.589Z
console.log(myDate.toLocaleString()); // 4/24/2024, 7:37:21 AM
console.log(myDate.toLocaleTimeString()); // 7:37:21 AM

// let createdDate = new Date(2024, 7 , 28)

// let createdDate = new Date(2024, 7 , 28,5,3)

// let createdDate = new Date("2024-08-28"); YY/MM/DD

let createdDate = new Date("04-24-2024");
console.log(createdDate.toLocaleString());

console.log(createdDate.toJSON());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(createdDate.getTime());
console.log(createdDate.getTime());

let newDate = new Date()

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());


newDate.toLocaleString('default', {
    weekday: "long",
    
})