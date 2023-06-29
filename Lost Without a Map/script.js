function maps(x) {
    let doubled = [];
    for (let i = 0; i < x.length; i++) {
        doubled.push(x[i] * 2);
    }
    return doubled
}


console.log(maps([1, 2, 3]));