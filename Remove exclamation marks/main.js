function removeExclamationMarks(s) {
    return s.replace(/[!]/g, '');
}


console.log(removeExclamationMarks("Hello World!"));
console.log(removeExclamationMarks("Hello!! World!"));