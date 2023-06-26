function oddOrEven(array) {
    let numbers = 0;
    for (let i = 0; i < array.length; i++) {
        numbers += array[i]
    }
    if (numbers % 2 === 0) {
        return 'even';
    } else {
        return 'odd'
    }
}


console.log(oddOrEven([0])); // even
console.log(oddOrEven([1])); // odd
console.log(oddOrEven([])); // even

console.log(oddOrEven([0, 1, 5])); // even
console.log(oddOrEven([0, 1, 3])); // even
console.log(oddOrEven([1023, 1, 2])); // even
