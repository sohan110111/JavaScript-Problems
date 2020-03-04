// function prototype
function add (arrayElement) {
    var sum = 0;
    for (var i = 0; i < arrayElement.length; i++) {
        sum = sum + arrayElement[i];
    }
    return sum;
}

var arrayElement = [7, 87, 78, 90, 56, 5, 4];
console.log("Summation of arrayElement : ", add(arrayElement)); // add function call

// values for parameter passed in function call
console.log("Summation of the second arrayElement : ", add([10, 20, 30, 40, 50])); 