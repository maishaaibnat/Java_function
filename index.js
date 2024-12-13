
function calculateDifference(a, b) {
    return a - b;
}
console.log("Difference:", calculateDifference(10, 5)); 


function isOdd(num) {
    return num % 2 !== 0;
}
console.log("Is 7 odd?:", isOdd(7)); 
console.log("Is 8 odd?:", isOdd(8)); 


function findMin(arr) {
    return Math.min(...arr);
}
console.log("Minimum in [4, 1, 7, 3]:", findMin([4, 1, 7, 3])); 


function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers in [1, 2, 3, 4, 5]:", filterEvenNumbers([1, 2, 3, 4, 5])); 


function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}
console.log("Sorted in descending order [5, 3, 8, 1]:", sortArrayDescending([5, 3, 8, 1])); 


function lowercaseFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Lowercased first letter of 'Hello':", lowercaseFirstLetter('Hello')); 


function findAverage(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log("Average of [1, 2, 3, 4, 5]:", findAverage([1, 2, 3, 4, 5])); 


function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is 2024 a leap year?:", isLeapYear(2024)); 
console.log("Is 2023 a leap year?:", isLeapYear(2023)); 
