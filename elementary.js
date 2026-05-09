function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
}

function divide(a, b) {
  let count = 0;
  while (a >= b) {
    a -= b;
    count++;
  }
  return count;
}

function modulo(a, b) {
  while (a >= b) {
    a -= b;
  }
  return a;
}
