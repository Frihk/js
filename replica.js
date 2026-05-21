const replica = (tar, ...sourc) => {
  for (let i = 0; i < sourc.length; i++) {
    const source = sourc[i];
    if (source === null || typeof source !== 'object') continue;

    for (let Key in source) {
      const sourceVal = source[Key];
      const isPlainObj = Object.prototype.toString.call(sourceVal) === '[object Object]';
      const isArr = Array.isArray(sourceVal);

      if (isPlainObj || isArr) {
        const tarVal = tar[Key];
        const isTarPlainObj = Object.prototype.toString.call(tarVal) === '[object Object]';
        const isTarArr = Array.isArray(tarVal);
        if ((isArr && !isTarArr) || (isPlainObj && !isTarPlainObj)) {
          tar[Key] = isArr ? [] : {};
        }
        replica(tar[Key], sourceVal);
      } else {
        tar[Key] = sourceVal;
      }
    }
  }
  return tar;
}
