function ionOut(a) {
  const result = a.match(/[0-9a-zA-Z]*tion[0-9a-zA-Z]*/g) ?? [];
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].replace('ion', '');
  }
  return result;
}
