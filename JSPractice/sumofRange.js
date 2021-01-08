
var testArray = [17, 42, 311, 5, 9, 10, 28,7, 6];
findMax(testArray);
/*
var sum = 0;

for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {

    sum += testArray[arrayPosition];
}

console.log("The sum of " + testArray + " is: " + sum);
*/


function findMax(numbers) {
    maxNumber = testArray[0];
    for (i = 0; i < testArray.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
            
            console.log(maxNumber);
        }
        
    }
    return maxNumber;
    
   
}
