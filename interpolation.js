const interpolation = ({ step, start, end, duration, callback }) => {
  const interval = duration / step;

  for (let i = 0; i < step; i++) {
    const x = start + (i / step) * (end - start);
    const y = (i + 1) * interval;

    setTimeout(() => {
      callback([x, y]);
    }, y);
  }
}
