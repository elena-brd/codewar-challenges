function maps(x) {
    let num = [];
    for (let i = 0; i < x.length; i++) {
        num.push(x[i] * 2)
    }
    return num;
}

console.log(maps([1, 2, 3]));