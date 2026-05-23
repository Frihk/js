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

  const startTimer = () => {
    timer = setTimeout(() => {
      if (trailing && lastArgs) {
        arg(...lastArgs);
        lastArgs = null;
        startTimer();
      } else {
        timer = null;
      }
    }, delay);
  };

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

    startTimer();
  };
}