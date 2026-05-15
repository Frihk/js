const adder = (arr, i) => arr.reduce((a, c) => a + c, i ?? 0);
const sumOrMul = (arr, i) => arr.reduce((a, c) => c % 2 === 0 ? a * c : a + c, i ?? 0);
const funcExec = (arr, i) => arr.reduce((a, c) => c(a), i ?? 0);