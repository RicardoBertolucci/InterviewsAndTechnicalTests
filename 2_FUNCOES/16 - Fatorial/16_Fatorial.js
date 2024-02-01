const num = Number(prompt("Digite um número: "));

const fatorial = num => {
    if(num === 1) return 1;
    
    let fat1 = fatorial(num - 1);

    return fat1 * num;
    // return fatorial(num - 1) + fatorial(num - 2);
    
}

try {
    if(isNaN(num) || num <= 0) {
        throw new Error("O número digitado é inválido!");
    }

    const resultado = fatorial(num);
    console.log(resultado);
} catch (e) {
    console.error(e);
} 