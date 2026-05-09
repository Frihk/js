function pyramid(str, int) {
  let res = '';
  for (let i = 1; i <= int; i++) {
    for (let s = 0; s < (int - i) * str.length; s++) {
      res = res + ' ';
    }
    for (let j = 0; j < i * 2 - 1; j++) {
      res = res + str;
    }

    if (i < int) {
      res = res + '\n';
    }
  }

  return res;
}