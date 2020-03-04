var friends = ["Abul", "Dabul", "Kabul"];

var stringAdd = friends[0]; // blank element assign
for(var i = 1; i < friends.length; i++) {
    stringAdd = stringAdd + friends[i];
}
console.log(stringAdd);