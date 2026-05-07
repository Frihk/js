function max(arg1, arg2) {
    if (arg1 > arg2){
        return arg1
    }else {
        return arg2
    }
}

function min(arg1, arg2) {
    if (arg1 > arg2){
        return arg2
    }else {
        return arg1
    }
}

// console.log(max(5, 9)); // Should output 9
// console.log(max(9, 5)); // Should output 9
// console.log(max(5, 5)); // Should output 5
// console.log(max(-5, -9)); // Should output -5

// // Test min function
// console.log(min(5, 9)); // Should output 5
// console.log(min(9, 5)); // Should output 5
// console.log(min(5, 5)); // Should output 5
// console.log(min(-5, -9)); // Should output -9