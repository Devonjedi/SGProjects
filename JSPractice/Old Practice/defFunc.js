/*
function addTwoNumbers(firstNumber, secondNumber) {
    
    // Add code to function in the function body to return the sum of firstNumber and secondNumber.
    var firstNumber = parseInt(prompt("Enter the first number"));

    var secondNumber = parseInt(prompt("Enter the second number"));

    //Add two numbers
    addTwoNumbers = firstNumber + secondNumber;

    //Display the sum
    console.log(`The sum of ${firstNumber} and ${secondNumber} is ${addTwoNumbers}`);

}
*/

var friends = ["Aneki", "Quell", "Clarity", "Sleepy", "Roghar", "DM Crimson"];
var team1 = new Array();
var team2 = new Array();

/*
for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1 
        team1.push(friends[i]);
    } else {
        // otherwise add them to team 2
        team2.push(friends[i]);
    }
}
*/

for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1
        team1.unshift(friends[i]);
    } else {
        team2.unshift(friends[i]);
    }
}