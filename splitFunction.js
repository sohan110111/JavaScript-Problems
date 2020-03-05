var sentence = "I am hardworking. I am serious. I am sure I will do it";
var reverse = sentence.split('').reverse().join(); // it will be seperate by comma
console.log(reverse);

var reverse = sentence.split('').reverse().join(""); // use join('')
console.log(reverse);

console.log("McDonalds".split("").reverse().join(" ")); // code from StackOverFlow