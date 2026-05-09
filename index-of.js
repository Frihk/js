function indexOf(array, item, fromIndex) {
  if (fromIndex === undefined) {
    fromIndex = 0;
  } else if (fromIndex < 0) {
    fromIndex = array.length + fromIndex;
    if (fromIndex < 0) {
      fromIndex = 0;
    }
  }

  for (var i = fromIndex; i < array.length; i++) {
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

