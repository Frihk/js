export const pick = (obj, arr) => {
    let newobj = {};

    if (typeof arr === 'string') {
        arr = [arr];
    }
    arr.forEach(element => {
        if (Object.hasOwn(obj, element)) {
            newobj[element] = obj[element];
        }
    });
    return newobj;
}

export const omit = (obj, arr) => {
    let newobj = {};
     if (typeof arr === 'string') {
        arr = [arr];
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (!arr.includes(key)){
                newobj[key] = obj[key];
            }
        }
    }
    return newobj;
    console.log
}
