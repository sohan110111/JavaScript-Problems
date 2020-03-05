function reverseMachine (str) {
    var reverse = "";
    for(var i = 0; i < str.length; i++) {
        reverse = str[i] + reverse;
    }

    return reverse;
}

var beforeReverse = "abcd";
console.log("Before reverse : ", beforeReverse);
var afterReverse = reverseMachine(beforeReverse);
console.log("After reverse : ", afterReverse);
// also statement 
var statement =  "code system doesn't read any man";
console.log("Before reverse statement : ", statement);
console.log("After reverse statement : ", reverseMachine(statement));
