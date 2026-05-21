export const filterKeys = (obj, callback) => {
  const oldobj = Object.entries(obj)
  const newob =  oldobj.filter(([Key, value]) => callback(Key))
  return Object.fromEntries(newob)
}

export const mapKeys = (obj, callback) => {
  const oldobj = Object.entries(obj)
  const newob =  oldobj.map(([Key, value]) => [callback(Key), value])
  return Object.fromEntries(newob)
}

export const reduceKeys = (obj, callback, intvalue) => {
  const oldobj = Object.keys(obj)
  let newob;
  if (typeof intvalue === 'undefined'){
    newob =  oldobj.reduce((acc, cr) => callback(acc, cr))
  }else {
    newob =  oldobj.reduce((acc, cr) => callback(acc, cr),intvalue)
  }
  return newob
}
