const string = prompt("Digite uma string: ").toLowerCase();

const palindromo = (string) => {
    const inverte = string.split('').reverse().join('');
    
    if(inverte === string) return true;
    return false;
}

const resultado = palindromo(string);
console.log(resultado);