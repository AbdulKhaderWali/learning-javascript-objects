// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false



//My solution
function myFunction(a){
    return a%1===0;
}

//Preferred Solution

function myFunction(a){
    return a - Math.floor(a) === 0;
}