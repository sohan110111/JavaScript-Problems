var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 3, 4, 5, 6,];
console.log("Before duplicate value remove in array : ", numbers)

var uniqueNumber = []; // assume

for (var i = 0; i < numbers.length; i++) {
    if(uniqueNumber.indexOf(numbers[i]) == -1) {
        uniqueNumber.push(numbers[i]);
    } 
}

console.log("After duplicate value remove in array : ", uniqueNumber);