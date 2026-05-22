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