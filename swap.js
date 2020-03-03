var smallJar = "water";
var bigJar = "juice";

console.log("before swaping : ", "smallJar =", smallJar,"bigJar = ", bigJar);

var tempJar = smallJar;
smallJar = bigJar;
bigJar = tempJar;

console.log("after swaping jar : ", "smallJar =", smallJar,"bigJar = ", bigJar );

// another way to solve swap in mathematics 
var x = 10;
var y = 13;
console.log("before swaping :", "x =", x, "y =", y);
x = x + y;
y = x - y;
x = x - y;
console.log("after swaping :", "x =", x, "y =", y);

// swap in array format 
var p = 39;
var q = 40;
console.log("before swaping :", "p =", p, "q =", q);
[p,q] = [q,p];
console.log("after swaping :", "p =", p, "q =", q);




