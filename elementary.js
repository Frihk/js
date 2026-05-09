function multiply(a, b) {
  let result = 0;
  let negative = false;
  if (b < 0) {
    negative = true;
    b = -b;
  }
  for (let i = 0; i < b; i++) {
    result += a;
  }
  if (negative) {
    return -result;
  }
  return result;
}

function divide(a, b) {
  if (b === 0) {
     return 0;
  }
  let count = 0;
  while (a >= b) {
    a -= b;
    count++;
  }
  return count;
}

function modulo(a, b) {
  if (b === 0) {
    return 0;
  }
  while (a >= b) {
    a -= b;
  }
  return a;
}
