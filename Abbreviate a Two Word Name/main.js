function abbrevName(name) {
    let [abbrFirstName, abbrLasttName] = name.split(' ');
    return abbrFirstName[0].toUpperCase() + "." + abbrLasttName[0].toUpperCase();
}

console.log(abbrevName("sam Harris")); // "S.H"