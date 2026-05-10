function vowelDots(arg) {
    return arg.replace(/[aeiou](?=[^ ])/gi, '$&.' )
}

