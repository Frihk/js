const circular = {};
circular.circular = circular;

// // Test that circular.circular points to the circular object itself
// console.log(circular.circular === circular); // Should output true

// // Test that we can navigate through multiple levels of the reference
// console.log(circular.circular.circular.circular === circular); // Should output true

// // Test what happens when you try to display the object
// console.log(circular); // The console should indicate a circular reference