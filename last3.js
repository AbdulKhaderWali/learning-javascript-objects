//write a function that takes a string as argument
//Extract the last 3 characters from the string
//Return the result


//My solution
function myFunction(str){
    return str.substr(str.length-3, str.length);
}


//Preferred solution
function myFunction(str){
    return str.slice(-3);
}