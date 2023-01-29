// Practice Problem 2
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglahMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks +banglahMarks
var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed(2);
averageTwoDecimal = parseFloat(averageTwoDecimal);
console.log(averageTwoDecimal);