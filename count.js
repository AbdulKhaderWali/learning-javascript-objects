//Write a function that takes an array
//Returns number of negative values in the array

//My solution
function myFunction(a) {
    let negative_values = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            negative_values++;
        }
    }
    return negative_values;
}


//Preferred solution
function myFunction(a) {
    return a.filter((el) => el < 0).length;
 }