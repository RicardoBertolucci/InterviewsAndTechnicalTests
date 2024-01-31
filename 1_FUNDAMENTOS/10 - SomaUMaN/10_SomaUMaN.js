const n = Number(prompt("Digite um valor para N maior que 1: "));

const somaUMaN = (final) => {
    if(isNaN(n) || n <= 1) {
        throw new Error("N não é maior que 1 ou não é um número.1")
    }
    
    const numeros = [];

    for(let i = 1; i <= final; i++) {
        numeros.push(i);
    }

    const total = numeros.reduce((ac, val, ind, arr) => {
        ac += val;
        return ac;
    }, 0)

    console.log(total);
}

try {
    const resultado = somaUMaN(n);
} catch (e) {
    console.log(e);
}