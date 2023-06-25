function correct(string) {
    return string.replace(/0/gi, 'O').replace(/5/gi, 'S').replace(/1/gi, 'I')
}

console.log(correct("L0ND0N"));
console.log(correct("DUBL1N"));
console.log(correct("51NGAP0RE"));

/*
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
*/