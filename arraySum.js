var getNumbers = [78, 56, 54, 76, 87, 90];
var totalNumber = 0; // assume result 
for (var i = 0; i < getNumbers.length; i++) {
    totalNumber = totalNumber + getNumbers[i];
}

console.log("Aggregate number is : ", totalNumber);