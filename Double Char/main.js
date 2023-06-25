function doubleChar(str) {
    let letter = '';
    for (let i = 0; i < str.length; i++) {
        letter += str[i] + str[i];
    }
    return letter;
}

console.log(doubleChar("abcd"));
console.log(doubleChar("1337"));