const n = Number(prompt("Digite um número inteiro N: "));

const fibonacci = (n) => {
    //Caso base
    if(n === 0) return 0;
    if(n === 1) return 1;

    //Caso não base
    return fibonacci(n - 1) + fibonacci(n - 2);
}

try {
    const resultado = fibonacci(n);
    console.log(resultado);
} catch (e) {
    console.log(e);
}