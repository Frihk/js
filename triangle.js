function triangle(str, int) {
  let res = '';

  for (let i = 1; i <= int; i++) {
    for (let j = 0; j < i; j++) {
      res = res + str;
    }
    if (i < int) {
      res = res + '\n';
    }
  }

  return res;
}