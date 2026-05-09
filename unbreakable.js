function split(a, b) {
  const result = [];
  if (b === '') {
    for (let i = 0; i < a.length; i++) {
      result.push(a[i]);
    }
    return result;
  }
  let current = '';
  for (let i = 0; i < a.length; i++) {
    let match = true;
    for (let j = 0; j < b.length; j++) {
      if (a[i + j] !== b[j]) {
        match = false;
      }
    }
    if (match) {
      result.push(current);
      current = '';
      i = i + b.length - 1; 
    } else {
      current = current + a[i];
    }
  }
  result.push(current); 
  return result;
}

function join(arr, elem) {
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    if (elem.length === 0) {
      res = res + arr[i];
    } else {
      res = res + arr[i];
      if (i < arr.length - 1) {
        res = res + elem;
      }
    }
  }
  return res;
}