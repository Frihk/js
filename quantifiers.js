function every(a, f) {
    for (let i = 0; i < a.length; i++) if (!f(a[i], i, a)) return false;
    return true;
}

function some(a, f) {
    for (let i = 0; i < a.length; i++) if (f(a[i], i, a)) return true;
    return false;
}

function none(a, f) {
    return !some(a, f);
}