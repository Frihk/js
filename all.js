const all = (obj) => {
  return new Promise((resolve, reject) => {
    const entries = Object.entries(obj);
    const result = {};
    let remaining = entries.length;

    if (remaining === 0) return resolve({});

    entries.forEach(([key, value]) => {
      Promise.resolve(value)
        .then((resolved) => {
          result[key] = resolved;
          remaining--;
          if (remaining === 0) resolve(result);
        })
        .catch(reject);
    });
  });
};
