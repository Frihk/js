function normal(arg) {
    for (let i = 0; i < arg.length;i++) {
        if (i + 1 < arg.length && arg[i] + arg[i+1] === 'hi'){
            return true
        }
    }
        return false

}


function begin(arg) {

    let char = arg.trim().slice(0,2)
    if (char === 'hi'){
        return true
    }
    return false
}


function end(arg) {

    let char = arg.trim().slice(-2)
    if (char === 'hi'){
        return true
    }
    return false
}



function beginEnd(arg) {

    let char = arg.trim()
    if (char === 'hi'){
        return true
    }
    return false
}
