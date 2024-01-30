const num1 = Number(prompt("1 - Digite um número: "));
const num2 = Number(prompt("2 - Digite um número: "));

const comparaNumero = (n1, n2) => {
    if(isNaN(n1) || isNaN(n2)) {
        throw new Error("O valor de n1 e n2 devem ser números");
    }

    if(n1 > n2) return '>';
    else if(n1 === n2) {
        return '=';
    } else {
        return '<';
    }
}

try {
    const resultado  = comparaNumero(num1, num2);
    console.log(`num1 ${resultado} num2`)
} catch(e) {
    console.log(e);
}
