var business = 4.5; //billion dollers
var minster = 5; //billion dollers
var softwareFarmOwner = 12.5 //billion dollers

var riches = Math.max(business, minster, softwareFarmOwner);
console.log(riches);

// using if - else ladder... 
if (business > minster) {
    if (business > softwareFarmOwner) {
        console.log("Business-man riches then other...");
    }
    else {
        console.log("Software-Farm-Owner riches then other....")
    }
}
else {
    if (minster > softwareFarmOwner) {
        console.log("Minster is richer then other...");
    }
    else {
        console.log("Software-farm-owner is richer then other...");
    }
}
