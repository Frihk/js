function slice(a, b, c) {
  const len = a.length;
  const result = [];
  if (b === undefined) {
    return a;
  }

  let start = b;
  let end = len;
  if (b < 0) {
    start = len + b;
  }

  if (c !== undefined) {
    end = c;
    if (c < 0) {
      end = len + c;
    }
  }
  if (start < 0) {
    start = 0;
  }
  if (end > len) {
    end = len;
  }
  for (let i = start; i < end; i++) {
    result.push(a[i]);
  }

  if (typeof a === 'string') {
    let s = '';
    for (let i = 0; i < result.length; i++) {
      s = s + result[i];
    }
    return s;
  }
  return result;
}