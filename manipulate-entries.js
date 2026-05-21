import { nutritionDB } from './manipulate-entries.data.js';

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

export const reduceEntries = (obj, callback, intvalue) => {
  const oldobj = Object.entries(obj)
  let newob;
  if (typeof intvalue === 'undefined'){
    newob =  oldobj.reduce((acc, [Key, value]) => callback(acc, [Key, value]))
  } else {
    newob =  oldobj.reduce((acc, [Key, value]) => callback(acc, [Key, value]), intvalue)
  }
  return newob
}

export const totalCalories = (arg) => {
  const newob = reduceEntries(arg, (acc, [Key, value]) => {
    return acc + (nutritionDB[Key].calories / 100) * value
  }, 0)
  return +(newob.toFixed(1))
}

export const lowCarbs = (arg) => {
  return filterEntries(arg, ([Key, value]) => {
    return (nutritionDB[Key].carbs / 100) * value < 50
  })
}

export const cartTotal = (arg) => {
  return mapEntries(arg, ([Key, value]) => {
    return [Key, Object.fromEntries(
      Object.keys(nutritionDB[Key]).map(prop => [prop, +((nutritionDB[Key][prop] / 100) * value).toFixed(3)])
    )]
  })
}