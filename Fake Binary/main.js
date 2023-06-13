function fakeBin(x) {
    let num = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] >= 5) {
            num[i] = 1;
        } else {
            num[i] = 0;
        }
    }
    return num.join('');
}

console.log(fakeBin('45385593107843568'));
console.log(fakeBin('509321967506747'));
console.log(fakeBin('366058562030849490134388085'));