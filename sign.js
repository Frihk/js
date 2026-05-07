function sign(num) {
    if (num === 0) {
        return 0
    }else if (num > 0){
        return 1
    }else {
        return -1
    }
}

function sameSign(num1, num2) {
    if (num1 > 0 && num2 > 0 || num1 < 0 && num2 < 0  || num1 === 0 && num2 === 0){
        return true 
    }else {
        return false
    }
}

console.log(sign(3)); // Should output 1
console.log(sign(-3)); // Should output -1
console.log(sign(0)); // Should output 0

// Test sameSign function
console.log(sameSign(3, 4)); // Should output true
console.log(sameSign(-3, -4)); // Should output true
console.log(sameSign(0, 0)); // Should output true
console.log(sameSign(3, -4)); // Should output false
console.log(sameSign(0, 4)); // Should output false
console.log(sameSign(0, -4)); // Should output false