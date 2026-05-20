export const fusion = (obj1, obj2) => {
    let result = {};
    for (let key in obj1){
        if (Array.isArray(obj1[key])&& Array.isArray(obj2[key])) {
            result[key] = obj1[key].concat(obj2[key])
        }else if (typeof obj1[key] === 'string' && typeof obj2[key] === 'string'){
            result[key] = `${obj1[key]} ${obj2[key]}`
        }else if (typeof obj1[key] === 'number' && (typeof obj2[key] === 'number' || typeof obj2[key] === 'undefined') ){
            if (typeof obj2[key] === 'undefined'){
                result[key] = obj1[key]
            }else{
                result[key] = obj1[key] + obj2[key]
            }
        }else if (typeof obj1[key] === 'object' && (typeof obj2[key] === 'object') && !Array.isArray(obj1[key]) && !Array.isArray(obj2[key])){ 
                result[key] = fusion(obj1[key], obj2[key])
        }else if (typeof obj1[key] !== typeof obj2[key]) {
            if (typeof obj2[key] === 'undefined') {
                result[key] = obj1[key]
            }else if (typeof obj1[key] === 'undefined') {
                result[key] = obj2[key]
            }
        }
    }

    for (let key in obj2){
        if (Array.isArray(obj2[key]) && !result.hasOwnProperty(key)) {
                result[key] = obj2[key]
        }else if (typeof obj2[key] === 'string' && !result.hasOwnProperty(key)){
            result[key] = obj2[key]
        }else if (typeof obj2[key] === 'number' && !result.hasOwnProperty(key)){
            result[key] = obj2[key]
        }else if (typeof obj2[key] === 'object' && !result.hasOwnProperty(key) && (typeof obj2[key] === 'object')) {
            result[key] = obj2[key]
        }
    }
    return result
}

console.log(fusion({ arr: [1, "2"] }, { arr: [2] }))
// -> { arr: [1, "2", 2] }

console.log(fusion(
  { arr: [], arr1: [5] },
  { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] },))

console.log(fusion({ str: "salem" }, { str: "alem" }))
// -> { str: "salem alem" }

console.log(fusion({ str: "salem" }, { str: "" }))
// -> { str: "salem " })
console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }))