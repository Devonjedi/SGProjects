
/*
var sentence= "I love learning software development";

for (var i=0; i < sentence.length; i++) {
    if(sentence[i] !== " ") {
        console.log(sentence[i])
    }
}
*/

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
<<<<<<< Updated upstream:JSPractice/Old Practice/loggingLetters.js
Declare a new variable named "sum" initialized to 0. Be sure to use the "var" keyword.

Use a for loop to add every positive integer less than n to sum.

Come up with a solution that works for all values of n.
=======
1.Declare a new variable named "sum" and initialize it to 0. Be sure to use the var keyword.
2.Use a for loop to add every positive integer less than n to sum.
3.Come up with a solution that works for all values of n.

>>>>>>> Stashed changes:JSPractice/loggingLetters.js
*/

var n = 25; 
var sum = 0;

for( i = 1 ; i < n; i++ ){
    sum += i;
    console.log(sum);
}