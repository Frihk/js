const debounce = (arg1, arg2) => {
     let timerId; 
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      arg1(...args);
    }, arg2);
  };
}

function opDebounce(arg1, arg2, options = {}) {
  let timerId;
  let hasCalledLeading = false;

  return function (...args) {
    if (options.leading && !hasCalledLeading) {
      arg1(...args);
      hasCalledLeading = true;
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      hasCalledLeading = false;
    }, arg2);
  };
}
