const retry = (count, callback) => {
  return async (...args) => {
    for (let i = 0; i <= count; i++) {
      try {
        return await callback(...args);
      } catch (err) {
        if (i === count) throw err;
      }
    }
  };
};

const timeout = (delay, callback) => {
  return async (...args) => {
    const timer = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), delay)
    );

    return Promise.race([callback(...args), timer]);
  };
};

