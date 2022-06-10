// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

//My solution
function myFunction(obj)
{
    delete obj.b;
    return obj;
}


//Preferred Solution

function myFunction(obj) {
    const { b, ...rest } = obj;
    return rest;
  }