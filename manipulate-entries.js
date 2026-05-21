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

export const totalCalories = (cart) => {
  return reduceEntries(
    cart,
    (acc, [key, value]) => acc + value.calories,
    0
  );
};

export const lowCarbs = (cart) => {
  return filterEntries(
    cart,
    ([key, value]) => value.carbs < 50
  );
};

export const cartTotal = (cart) => {
  return reduceEntries(
    cart,
    (acc, [key, value]) => ({
      calories: acc.calories + value.calories,
      protein:  acc.protein  + value.protein,
      carbs:    acc.carbs    + value.carbs,
      sugar:    acc.sugar    + value.sugar,
      fiber:    acc.fiber    + value.fiber,
      fat:      acc.fat      + value.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, sugar: 0, fiber: 0, fat: 0 }
  );
};
