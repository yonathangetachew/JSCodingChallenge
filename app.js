// //Functions

// // create a function called Adder is going to take three arguments

// function adder(x, y, z) { // Created function named adder with parameters x, y, and z
//   return x + y + z;
// }

// function multiply (a, b, c) { // Created a function names multiply that return multiplied output
//     return a * b * c;
// }

// console.log(adder(1, 2, 3));
// console.log(multiply(10, 20, 30));


// // Create a function called "isString" that takes three arguments (x, y, z)

// function isString (x,y,z){
//     //isString checks if each argument is using Typeof
//     // If each argument is a string it will note that

//     if ( typeof x === "string" && typeof y === "string" && typeof z === "string"){
//     console.log("Yep. They are all strings!");
//     } else {
//         console.log("No ... I don't believe these are strings");
//     }
//     //If anyone of them is NOT a string ... it will note that
// }

// isString("Osiel", "Miguel", "Aubrey");
// isString(10, "RedVentures", "street");
// //.         x.      y.      z.


// // Vowel checker Example

// function vowelChecker(x) {
//     //VowelChecker will grab the first letter (character)....
//     var firstChar = x.toLowerCase().charAt(0);

//     //then check if that first letter is a vowel

//     if (
//         firstChar === "a" ||
//         firstChar === "e" ||
//         firstChar === "i" ||
//         firstChar === "o" ||
//         firstChar === "u"
//     ) {
//         console.log("OMG. The first letter is a VOWEL!!!");
//     } else {
//         console.log("HEY YOU'RE NOT A VOWEL LEAVE!!");
//     }
// }

// vowelChecker("Nah");

var numbers = [12, -34, 67, -78, -98, 78, -90];
numbers = numbers.filter(function(x){
    return x > -1
})
console.log(numbers);



