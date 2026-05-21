export const filterEntries = (obj, callback) => {
  const oldobj = Object.entries(obj)
  const newob =  oldobj.filter(([Key, value]) => callback([Key, value]))
  return Object.fromEntries(newob)
}

export const mapEntries = (obj, callback) => {
  const oldobj = Object.entries(obj)
  const newob =  oldobj.map(([Key, value]) => callback([Key, value]))
  return Object.fromEntries(newob)
}

export const reduceEntries = (obj, callback, intvalue = 0) => {
  const oldobj = Object.entries(obj)
  let newob;
  if (typeof intvalue === 'undefined'){
    newob =  oldobj.reduce((acc, [Key, value]) => callback(acc, [Key, value]))
  }else {
    newob =  oldobj.reduce((acc, [Key, value]) => callback(acc, [Key, value]),intvalue)
  }
  return newob
}

export const totalCalories = (arg) =>{
    return reduceEntries(arg, (acc, [Key, value]) => {
       return acc + (nutritionDB[Key].calories / 100) * value
    },0)
}


export const lowCarbs = (arg) => {
    return filterEntries(arg, ([key, value]) => {
        return (nutritionDB[key].carbs / 100) * value < 50
    })
}

export const cartTotal = (arg) => {
    return mapEntries(arg, ([key, value]) => {
        return [key, Object.fromEntries(
            Object.keys(nutritionDB[key]).map(prop => [prop, +((nutritionDB[key][prop] / 100) * value).toFixed(3)])
        )]
    })
}
