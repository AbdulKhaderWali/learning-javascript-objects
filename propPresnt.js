//write a function that takes an object (a) and a string (b) as argument
//Return true if a has a property with key b
//Return false otherwise


//My solution
function myFunction(a,b){
    if(a.hasOwnProperty(b)){
        return true;
    }
    return false;
}

//Preferred solution

function myFunction(a,b){
    return b in a;
}