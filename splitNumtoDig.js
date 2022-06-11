// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

//My solution
function myFunction(a) {
    let arr = [];
    while(a!=0)
    {
       let n = a%10;
       arr.push(n);
       a = parseInt(a/10);
    }
    arr.reverse();
    return arr;
 }

 //Preferred Solution
 function myFunction( a ) {
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
  }