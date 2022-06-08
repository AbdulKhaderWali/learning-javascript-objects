//write a function that takes a string (a) as argument 
//Remove the last 3 characters of a 
//return result

function myFunction(a){
    return a.substr(0,a.length-3);
}


//Preferred solution

function myFunction(a){
    return a.slice(0,-3);
}