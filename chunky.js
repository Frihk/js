function chunk(a, b) {
  const result = [];
  let current = [];
  for (let i = 0; i < a.length; i++) {
    current.push(a[i]);
    if (current.length === b) {
      result.push(current);
      current = [];
    }
  }
  if (current.length > 0) {
    result.push(current);
  }
  return result;
}
