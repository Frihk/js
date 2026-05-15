function map(a, f) {
    const result = [];
    for (let i = 0; i < a.length; i++) result.push(f(a[i], i, a));
    return result;
}

function flatMap(a, f) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        const r = f(a[i], i, a);
        if (Array.isArray(r)) for (let j = 0; j < r.length; j++) result.push(r[j]);
        else result.push(r);
    }
    return result;
}