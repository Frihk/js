function normal(arg) {
    for (i = 0; i < arg.length;i++) {
        if (i + 1 < arg.length && arg[i] + arg[i+1] === 'hi'){
            return true
        }
    }
        return false

}

console.log(normal("oh hi there")); // true

function begin(arg) {

    let char = arg.trim().slice(0,2)
    if (char === 'hi'){
        return true
    }
    return false
}

console.log(begin("hi there")); // true

function end(arg) {

    let char = arg.trim().slice(-2)
    if (char === 'hi'){
        return true
    }
    return false
}

console.log(end("say hi")); // true

function beginEnd(arg) {

    let char = arg.trim()
    if (char === 'hi'){
        return true
    }
    return false
}


console.log(beginEnd("hi")); // true