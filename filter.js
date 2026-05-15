function filter(a, f) {
    const result = [];
    for (let i = 0; i < a.length; i++) if (f(a[i], i, a)) result.push(a[i]);
    return result;
}

function reject(a, f) {
    return filter(a, (c, i, a) => !f(c, i, a));
}

function partition(a, f) {
    return [filter(a, f), reject(a, f)];
}