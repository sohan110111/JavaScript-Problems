var speech = "I love coding and practicing everyday all day-night."

var count = 0;

for (var i = 0; i < speech.length; i++) {
    var charSpeech = speech[i];
    if ((charSpeech == " ") && (speech[i-1] != " ")){  // this condition for any extra white space 
        count++;
    }
}
count++; // for end of speech 
console.log("The total speech word of your count : ", count);