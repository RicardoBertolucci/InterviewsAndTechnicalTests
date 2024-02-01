const string = prompt("Digite uma palavra: ");

const inverteString = (string) => {
    const array = Array.from(string);
    
    // for (let i = string.length; i >= 0; i--) {
    //     console.log(string[i]);
    // }
    const inverte = [];
    for(let i = 0; i < array.length; i++) {
        inverte.unshift(array[i]);
    }

    return inverte.join('');
}

try {
    const resultado = inverteString(string);
    console.log(resultado.toLowerCase());
} catch (e) {
    console.error(e);
}