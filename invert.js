export const invert = (obj) => {
  let newobj = {

  };
    if (typeof obj !== 'object') {
        return "Not an object"
    }
    for (let key in obj) {
     if (obj.hasOwnProperty(key)) {
        let value = obj[key];   
        newobj[value] = key;    
      }
    }
    return newobj
}

