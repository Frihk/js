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
  return parseFloat(
    reduceEntries(
      cart,
      (acc, [key, value]) => acc + (nutritionDB[key].calories * value) / 100,
      0
    ).toFixed(1)
  );
};

export const lowCarbs = (cart) => {
  return filterEntries(
    cart,
    ([key, value]) => {
      if (!nutritionDB[key]) return false;
      const carbs = nutritionDB[key].carbs;
      return carbs !== 0 ? (value * carbs) / 100 < 50 : true;
    }
  );
};

export const cartTotal = (cart) => {
  return mapEntries(cart, ([key, grams]) => {
    const nutrients = nutritionDB[key];
    const totals = {};
    for (let nutrient in nutrients) {
      totals[nutrient] = Math.round((grams / 100) * nutrients[nutrient] * 1000) / 1000;
    }
    return [key, totals];
  });
};
