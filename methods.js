// //METHODS ================

// //Filter method
// let numbers = [1, 2, 3, 4, 5, 6];

// function filterEvenNumbers(numbers) {
//   return numbers.filter(function (number) {
//     return number % 2 === 0;
//   });
// }

// let evenNumbers = filterEvenNumbers(numbers);
// console.log(evenNumbers);

// // MAP METHOD

// // function doubleNumbers(number) {
// //   return numbers.map(function (number) {
// //     return number * 2;
// //   });
// // }

// console.log(doubleNumbers(numbers2));

// // output: [2, 4, 6, 8, 10]
// // .map() iterate over an array and manipulate or changes the data Items

// //SORT METHOD
// let unsortedNumbers = [4, 2, 8, 1, 5];

// function sortNumbers(numbers) {
//   return numbers.sort(function (a, b) {
//     return a - b;
//   });
// }

// console.log(sortNumbers(unsortedNumbers));

// // [1,2,4,5,8]



// Arrow functions example

//regular function
var createGreeting = function (message, name) {
    return message + "," + name + "!";
};

// Arrow function
var createGreeting = (message, name) => {
    return message + "," + name + "!";
};

// If the arrow function body contains only one expression, we can omit the curly braces and auto return
var createGreeting = (message, name) => message + "," + name + "!";


//if an Arrow function only has one parameter, we can omit the parentheses () around the single parameter
var greet = (greeting) => console.log(greeting);

var greeting = createGreeting("Hello, Osiel");

greet(greeting);