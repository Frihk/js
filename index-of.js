function indexOf(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) return i;
  }
  return -1;
}

function lastIndexOf(array, item) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === item) return i;
  }
  return -1;
}

function includes(array, item) {
  return indexOf(array, item) !== -1;
}   
