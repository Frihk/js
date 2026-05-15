function fold(a, f, acc) {
    for (let i = 0; i < a.length; i++) acc = f(acc, a[i], i, a);
    return acc;
}

function foldRight(a, f, acc) {
    for (let i = a.length - 1; i >= 0; i--) acc = f(acc, a[i], i, a);
    return acc;
}

function reduce(a, f) {
    if (a.length < 1) return new Error('empty array');
    return fold(a.slice(1), f, a[0]);
}

function reduceRight(a, f) {
    if (a.length < 1) return new Error('empty array');
    return foldRight(a.slice(0, -1), f, a[a.length - 1]);
}