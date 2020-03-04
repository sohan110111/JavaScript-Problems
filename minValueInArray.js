var marks = [78, 87, 78, 48, 67, 45, 67, 45, 78]; // suppose student get mark in programming course

var minimumMarks = marks[0];
for(var i = 0; i < marks.length; i++) {
    var checkMark = marks[i]; 
    if (checkMark < minimumMarks) {
        minimumMarks = checkMark;
    }
}

console.log("Highest mark is : ", minimumMarks);