export const filterValues = (obj, callback) => {
  const oldobj = Object.entries(obj)
  const newob =  oldobj.filter(([Key, value]) => callback(value))
  return Object.fromEntries(newob)
}

export const mapValues = (obj, callback) => {
  const oldobj = Object.entries(obj)
  const newob =  oldobj.map(([Key, value]) => [Key, callback(value)])
  return Object.fromEntries(newob)
}

export const reduceValues = (obj, callback, intvalue) => {
  const oldobj = Object.values(obj)
  let newob;
  if (typeof intvalue === 'undefined'){
    newob =  oldobj.reduce((acc, cr) => callback(acc, cr))
  }else {
    newob =  oldobj.reduce((acc, cr) => callback(acc, cr),intvalue)
  }
  return newob
}
