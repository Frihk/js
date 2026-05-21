export const deepCopy = (arg) => {
 if (Array.isArray(arg)) {
    let newob = [];
    for (let i = 0; i < arg.length; i++) {
      newob[i] = deepCopy(arg[i]);
    }
    return newob;
  }
  
  if (typeof arg === 'object') {
    let newob = {};
    for (let Key in arg) {
      newob[Key] = deepCopy(arg[Key]);
    }
    return newob;
  }
  
  return arg;
}