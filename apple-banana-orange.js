// Practice Problem 1
var moneyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;
var totalPrice = applePrice + orangePrice;
var giveBack = moneyGiven - totalPrice;
console.log(giveBack);

// Find Banana from this array
var fruits = ['Apple', 'Banana', 'Ornnge'];
var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);

// Replace Banana with Mango
fruits[bananaIndex] = 'Mango';
console.log(fruits);

// Remove Orange
fruits.pop();
console.log(fruits);

// Add Watermelon
fruits.push('Watermelon');
console.log(fruits);