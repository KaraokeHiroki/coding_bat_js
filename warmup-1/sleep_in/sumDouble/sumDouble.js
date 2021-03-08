/**
 * @module sumDouble.js
 * Implements the solution to the Coding Bat sum double problem. See: https://codingbat.com/prob/p141905
 */

const sumDouble = (num1, num2) => (num1 === num2 ? 2 : 1) * (num1 +num2)

// export the method
module.exports = {
    sumDouble
}