function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow';
            break;
        case 'yellow':
            return 'red';
            break;
        case 'red':
            return 'green';
            break;
    }
}

console.log(updateLight("green")); // yellow
console.log(updateLight("yellow")); // red
console.log(updateLight("red")); // green