const num = Number(prompt("Digite um número: "));

const parImpar = (num) => {
    if(isNaN(num) || !Number.isInteger(num)) {
        throw new Error("O número digitado é inválido!");
    }

    if(num % 2 === 0) return `${num} é par`;
    return `${num} é ímpar`;
}

try {
    const resultado = parImpar(num);
    console.log(resultado);
} catch(e) {
    console.error(e);
}