export const replica = (tar, ...sourc) => {
  for (let i = 0; i < sourc.length; i++) {
    const source = sourc[i];
    if (source === null || typeof source !== 'object') continue;

    for (let Key in source) {
      if (source[Key] && typeof source[Key] === 'object') {
        if (!tar[Key] || typeof tar[Key] !== 'object') {
          tar[Key] = Array.isArray(source[Key]) ? [] : {};
        }
        replica(tar[Key], source[Key]);
      } else {
        tar[Key] = source[Key];
      }
    }
  }
  return tar;
}
