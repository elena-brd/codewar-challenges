function arrayPlusArray(arr1, arr2) {
    let result = 0;
    result = arr1.concat(arr2).reduce((arr1, arr2) => arr1 + arr2)
    return result;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));