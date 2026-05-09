function nasa(x) {
  let res = '';
  for (let i = 1; i <= x; i++) {
    let word = '';
    if (i % 3 === 0 && i % 5 === 0) {
      word = 'NASA';
    } else if (i % 3 === 0) {
      word = 'NA';
    } else if (i % 5 === 0) {
      word = 'SA';
    } else {
      word = String(i);
    }
    if (i < x) {
      res = res + word + ' ';
    } else {
      res = res + word;
    }
  }
  return res;
}