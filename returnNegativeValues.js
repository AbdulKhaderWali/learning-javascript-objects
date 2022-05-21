// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array


//My solution

//myFunction([1,-2,2,-4])
function myFunction(a) {
    let negativeValues = 0;
    for(let i=0;i<a.length;i++)
    {
        if (a[i] < 0){
        negativeValues++;
        }
    }
    return negativeValues;
}

//Preferred solution

function myFunction(a){
    return a.filter((el) => el < 0).length;
}

//output 2