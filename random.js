var dice = Math.random();
console.log(dice);

// random number generate in 1 to 10;

var randomNumber = Math.random() * 10; // it's given output 0 to 10
console.log(randomNumber);
var randomRound = Math.round(randomNumber);
console.log(randomRound);

// ludu dice test 

var diceTest = Math.random() * 5 + 1; // it's given output 1 to 10
var output = Math.round(diceTest);
console.log(output);

// using for loop to generate n(as you required) times random number.
console.log("Random number generate of n times using for loop : ");
for(var start = 0; start < 10 ; start++) {
    var randomGenerate = Math.random() * 10;
    var output2 = Math.round(randomGenerate);
    console.log(output2);
}

// array test
var student = ["Rasel", "Masud", "Suvo", "Hanif", "Manik", "Tohid"];
var check = Math.random() * (student.length-1);
var checkOut = Math.round(check);
console.log(student[checkOut]);


