function solution(str) {
    const arr = str.split('');
    const reversed = arr.reverse();
    const result = reversed.join('');
    return result;
}

console.log(solution('world')); // 'dlrow'
console.log(solution('hello')); // 'olleh'
console.log(solution('')); // ''
console.log(solution('h')); // 'h'