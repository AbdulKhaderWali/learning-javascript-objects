//Write a function that takes an object (a) as argument
//Return an array with all object keys



//My solution
function myFunction(a){
    let arr = [];
    arr = Object.keys(a);
    return arr;
}

//Preferred solution

function myFunction(a){
    return Object.keys(a);
}