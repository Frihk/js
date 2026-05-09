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
  if (b < 0) {
    return -divide(a, -b);
  }
  let count = 0;
  if (a >= 0) {
    while (a >= b) {
      a -= b;
      count++;
    }
  } else {
    while (a < 0) {
      a += b;
      count--;
    }
  }
  return count;
}

function modulo(a, b) {
  if (b === 0) {
    return 0;
  }
  let q = divide(a, b);  // ← add this line, q was never defined
  let remainder = a;
  if (q > 0) {
    for (let i = 0; i < q; i++) {
      remainder -= b;
    }
  } else if (q < 0) {
    for (let i = q; i < 0; i++) {
      remainder += b;
    }
  }
  return remainder;
}
