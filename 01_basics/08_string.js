const MyName = "Deepak"
const repoCount = 50

console.log(MyName + repoCount + " Value"); // don't use this method

console.log(`Hello my name is ${MyName} and my repo count is ${repoCount} `); // use backticks methods in string

const myPublicProfileName = new String("Adv.Algohub")  // using string object to create string variable

console.log(myPublicProfileName)


// note : string ias an object not an array unlike python

// String accessing


console.log(myPublicProfileName[0])
console.log(myPublicProfileName[1])
console.log(myPublicProfileName[2])


console.log(myPublicProfileName.__proto__)

console.log(myPublicProfileName.length);
console.log(myPublicProfileName.toUpperCase());
console.log(myPublicProfileName.toLowerCase());
console.log(myPublicProfileName.charAt(0));


console.log(myPublicProfileName.indexOf('A'));


const newName = myPublicProfileName.substring(0,4);
console.log(newName);


const secondName = myPublicProfileName.slice(0,10);
console.log(secondName );


// trim : removes the extra space from the start and the end

const str1 = new String("          Hello            ")
console.log(str1);
console.log(str1.trim())

console.log(str1.replace('H','W'))

const demo = new String("Hi I'm really happy meeting you !")

console.log(demo.split(' '))

