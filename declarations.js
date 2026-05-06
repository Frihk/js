const escapeStr = "\`\\/\"'";
const arr = [4, '2'];
Object.freeze(arr)

const obj = {
    str : "string",
    num : 1000,
    bool: true,
    undef: undefined
};
Object.freeze(obj)

const nested = {
    arr : [4, '2'],
    obj : {
        str : "nice",
        num : 1001,
        bool : false
    }
};
Object.freeze(nested.arr)
Object.freeze(nested.obj)
Object.freeze(nested)

