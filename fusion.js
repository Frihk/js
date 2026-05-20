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
            }else {
                result[key] = obj2[key]
            }
        }
    }

    for (let key in obj2){
        if (!result.hasOwnProperty(key)) {
            result[key] = obj2[key]
        }
    }
    return result
}
