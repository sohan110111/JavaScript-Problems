var num1 = 108;
var num2 = 899876;
var num3 = 8087;
var num4 = 54987;

// maximum number check
var maxNumber = Math.max(num1, num2, num3, num4);
console.log(maxNumber);

if (num1>num2 && num1>num3 && num1>num4) {
    console.log("Number1 is bigger.");
}
else if (num2>num3 && num2>num4) {
    console.log("Number2 is bigger.");
} 
else if (num3>num4) {
    console.log("Number3 is bigger.");
}
else {
    console.log("Number4 is bigger");
}


// minmum number check
var minNumber = Math.min(num1, num2, num3, num4);
console.log(minNumber);

if (num1<num2 && num1<num3 && num1<num4) {
    console.log("Number1 is smaller.");
}
else if (num2<num3 && num2<num4) {
    console.log("Number2 is smaller.");
} 
else if (num3<num4) {
    console.log("Number3 is smaller.");
}
else {
    console.log("Number4 is smaller");
}