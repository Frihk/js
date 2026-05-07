// const sourceObject = {
//   num: 42,
//   bool: true,
//   str: "some text",
//   log: console.log,
// };

function get(arg1) {
    return sourceObject[arg1]
}

function set(arg1, arg2) {
    sourceObject[arg1] = arg2
    return sourceObject[arg1]
}

// // Test get function
// console.log(get("num")); // Should output 42
// console.log(get("bool")); // Should output true
// console.log(get("str")); // Should output 'some text'

// // Test set function
// console.log(set("num", 77)); // Should output 77
// console.log(set("bool", false)); // Should output false
// console.log(set("str", "new text")); // Should output 'new text'

// // Verify the changes
// console.log(get("num")); // Should output 77
// console.log(get("bool")); // Should output false
// console.log(get("str")); // Should output 'new text'