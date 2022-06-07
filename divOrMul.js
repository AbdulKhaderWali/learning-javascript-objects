// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

//My Solution
function myFunction(a,b){
    if(a<b)
    {
        return a/b;
    }
    else{
        return a*b;
    }
}


//Preferred Solution
function myFunction(a, b) {
    return a < b ? a / b : a * b
  }
// myFunction(10, 100)
// 0.1