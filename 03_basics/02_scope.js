//var c = 300

let a = 100 // global scope

if (true){
    let a = 10 // block scope
    const b = 20
    // console.log("Inner A: ", a);
}

// console.log(a); 


function one(){
    const userName = "techy"

    function two(){
        const website = "youtube"
        //console.log(userName);
    }

    //console.log(website);

    two()
}

one()

if (true) {
    const userName = "techy"

    if (userName === "techy"){
        const website = "youtube"
        //console.log(userName + website);
    }

    //console.log(website);
}

//console.log(userName);

//+++++++++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++++


console.log(addOne(5)) // can be used even before declared

function addOne(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(6)) // cannot be used before declared