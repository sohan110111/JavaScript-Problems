var sentence = "I am hardworking. I am serious. I am sure I will do it";
var letterCount = 0;
var whiteSpaceCount = 0;
for(var i = 0; i < sentence.length; i++){
    var letter = sentence[i];
    if(letter == "a"){
        letterCount++;
    }
    else if (letter == " "){
        whiteSpaceCount++;
    }
}
console.log("In string of total letter a is : ",letterCount, "times");
console.log("In whiteSpaceCount of total letter : ",whiteSpaceCount, "times");

// 