function reverse(a) {
  var result = [];

  for (var i = a.length - 1; i >= 0; i--) {
    result.push(a[i]);
  }

  if (a instanceof Array) {
    return result;
  }

  var s = '';
  for (var i = 0; i < result.length; i++) {
    s = s + result[i];
  }
  return s;
}