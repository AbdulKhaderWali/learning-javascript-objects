//write a function that takes a string (a) as argument
//create an object that has a property with key 'key' and a value of a
//Return the object

//My solution
function myFunction(a){
    let myObj = {};
    myObj.key = a;
    return myObj;
}

//Preferred solution
function myFunction(a){
    return {key : a};
}