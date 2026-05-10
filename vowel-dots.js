const vowels = /[aeiou](?=[^ ])/gi;


function vowelDots(arg) {
    return arg.replace(vowels, '$&.' )
}
