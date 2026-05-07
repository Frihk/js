function isPositive(arg) {
    if (arg > 0) {
        return true
    }else {
        return false
    }
}

function abs(arg2) {
    if (isPositive(arg2)) {
        return arg2
    }else if (arg2 === 0) {
        return 0
    }else {
        return arg2 * -1
    }
}

console.log(isPositive(3)); // Should output true
console.log(isPositive(0)); // Should output false
console.log(isPositive(-3)); // Should output false

// Test abs function
console.log(abs(0)); // Should output 0
console.log(abs(5)); // Should output 5
console.log(abs(-5)); // Should output 5
console.log(abs(-10)); // Should output 10