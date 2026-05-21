const pick = (object, keys) => {
    keys = Array.isArray(keys) ? keys : [keys]
    const res = {}
    for (const key of keys) {
        if (Object.hasOwn(object, key)) {
            res[key] = object[key]
        }
    }
    return res
}
const filterEntries = (object, func) => {
    return pick(object, Object.keys(object).filter(key => func([key, object[key]])))
}
const mapEntries = (object, func) => {
    const res = {}
    Object.keys(object).forEach(key => {
        const [k, v] = func([key, object[key]])
        res[k] = v
    })
    return res
}
const totalCalories = (cart, nutritionDB) => {
    return parseFloat(reduceEntries(cart, (acc, [key, value]) => acc += value / 100 * nutritionDB[key].calories, 0).toFixed(1)) 
}

const lowCarbs = (cart, nutritionDB) => {
    return filterEntries(cart, ([key, value]) => value / 100 * nutritionDB[key].carbs < 50)
}

const cartTotal = (cart, nutritionDB) => {
    return mapEntries(cart, ([key, value]) => [key, mapEntries(nutritionDB[key], ([k, v]) => [k, parseFloat((value / 100 * v).toFixed(3))])])
}