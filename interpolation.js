const interpolation = ({ step, start, end, duration, callback }) => {
  const interval = duration / step;

  for (let i = 1; i < step; i++) {
    const x = i / step;
    const y = start + (x * (end - start));

    setTimeout(() => {
      callback([x, y]);
    }, interval * i);
  }
}


