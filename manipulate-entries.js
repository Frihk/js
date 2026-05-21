const nutritionDB = {
  tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
  vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
  oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
  onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
  garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
  sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
  orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
}

function filterEntries(obj, callback) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        if (callback([key, value])) {
            result[key] = value;
        }
    }
    return result;
}

function mapEntries(obj, callback) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        const [newKey, newValue] = callback([key, value]);
        result[newKey] = newValue;
    }
    return result;
}

function reduceEntries(obj, callback, initialValue) {
    const entries = Object.entries(obj);
    if (entries.length === 0) return initialValue;
    
    let accumulator = initialValue !== undefined ? initialValue : entries[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < entries.length; i++) {
        accumulator = callback(accumulator, entries[i]);
    }
    return accumulator;
}

function totalCalories(cart) {
    const total = reduceEntries(cart, (total, [item, grams]) => {
        const per100g = nutritionDB[item];
        return total + (per100g.calories * grams) / 100;
    }, 0);
    
    return Math.round(total * 10) / 10;
}

function lowCarbs(cart) {
    return filterEntries(cart, ([item, grams]) => {
        const per100g = nutritionDB[item];
        const totalCarbs = (per100g.carbs * grams) / 100;
        return totalCarbs < 50;
    });
}

function cartTotal(cart) {
    return mapEntries(cart, ([item, grams]) => {
        const per100g = nutritionDB[item];
        const factor = grams / 100;
        
        const nutrients = {};
        for (const nutrient in per100g) {
            const value = per100g[nutrient] * factor;
            nutrients[nutrient] = Math.round(value * 1000) / 1000;
        }
        return [item, nutrients];
    });
}
