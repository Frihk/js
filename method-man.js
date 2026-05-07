function words(arg) {
    const result = arg.split(" ")
    return result
}
console.log(words("Hello there, how are you?"));

function sentence(arg) {
    const result = arg.join(" ")
    return result
}

console.log(sentence(["This", "is", "a", "test"]));

function yell(arg) {
    const result = arg.toUpperCase();
    return result
}

function whisper(arg) {
    const result = `*${arg.toLowerCase()}*`;
    return result
}

function capitalize(arg) {
    const result = `${arg[0].toUpperCase()}${arg.slice(1).toLowerCase()}`;
    return result
} 
// // Test yell function
// console.log(yell("be quiet"));
// // Should output: "BE QUIET"

// // Test whisper function
// console.log(whisper("EXCUSE ME"));
// // // Should output: "*excuse me*"

// // // Test capitalize function
// console.log(capitalize("rUNNING"));
// // Should output: "Running"