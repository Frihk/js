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
       return acc + value.calories
    }
    )
}


export const lowCarbs = (arg) => {
    return mapEntries( filterEntries(arg, ([key, value]) => {
        return value.carbs < 50
    }), ([key, value]) => {
        return [key, value.carbs]
    })
}

export const cartTotal = (arg) => {
    return mapEntries(arg, ([key, value]) => {
       return [key, value]
    })
}
