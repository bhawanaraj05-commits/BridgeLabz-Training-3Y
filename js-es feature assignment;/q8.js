"use strict";

// Original code:
// function demo(a, a) {
//     total = 10;
//     delete total;
// }
// demo(5, 10);

// Strict mode mein duplicate parameters allowed nahi hain.
// Isliye original function parse hote hi SyntaxError de sakta hai.

// Correct ES6 version:
function demo(a, b) {
    let total = 10;
    console.log(`a = ${a}, b = ${b}, total = ${total}`);
}

demo(5, 10);