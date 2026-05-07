let smalls = -Number.MAX_VALUE;
let biggie = Number.MAX_VALUE ;

// console.log(smalls < -1e308); // Should output true
// console.log(isFinite(smalls)); // Should output true

// // Test that you've found the correct maximum value
// console.log(biggie > 1e308); // Should output true
// console.log(isFinite(biggie)); // Should output true

// // Check what happens beyond these limits
// console.log(smalls * 2); // Would likely output -Infinity
// console.log(biggie + 1 === biggie); // Would likely output true (can't represent a larger number)