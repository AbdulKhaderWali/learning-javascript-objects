//To return keys of the object in the form of array

//my Solution
// a = {'a':1,'b':2,'c':3}
function myFunction(a){
    let arr = [];
    arr = Object.keys(a);
    return arr;
}

//Preferred Solution
function myFunction(a){
    return Object.keys(a);
}

//Output
// ['a','b','c']