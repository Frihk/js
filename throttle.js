const throttle = (arg, delay) =>{
  let timer = null;

  return function (...args) {
    if (timer) return;

    arg(...args);

    timer = setTimeout(() => {
      timer = null;
    }, delay);
  };
}

const opThrottle = (arg, delay, options = {}) => {
  let timer = null;
  let lastArgs = null;
  const { leading = false, trailing = false } = options;

  return function (...args) {
    if (timer) {
      lastArgs = args;
      return;
    }

    if (leading) {
      arg(...args);
    } else {
      lastArgs = args;
    }

    timer = setTimeout(() => {
      if (trailing && lastArgs) {
        arg(...lastArgs);
      }
      timer = null;
      lastArgs = null;
    }, delay);
  };
}