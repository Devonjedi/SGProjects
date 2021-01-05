var sentence= "I love learning software development";

for (var i=0; i < sentence.length; i++) {
    if(sentence[i] !== " ") {
        console.log(sentence[i])
    }
}

/* Practice if and else 
var n = 23;
var result = 59;

//If answer is even
if (n % 2 == 0) {
    console.log("The number is even");
    result = result + 10;
    console.log(result);
}
//If answer is odd
else {
    result = result - n;
    console.log(result);
}
*/

/*
Declare a new variable named "sum" initialized to 0. Be sure to use the "var" keyword.

Use a for loop to add every positive integer less than n to sum.

Come up with a solution that works for all values of n.
*/

var n = 25; 
var sum = 0;

for( i=1 ; i < n; i++ ){
    sum += i
    console.log(sum);
}