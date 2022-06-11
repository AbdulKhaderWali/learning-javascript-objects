// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b


//My solution
function myFunction(a, b) {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === a) {
            count++;
        }
    }
    return count;

}

//Preferred solution
function myFunction(a, b) {
    return b.split(a).length - 1;
  }