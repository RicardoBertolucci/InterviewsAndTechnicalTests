const num = Number(prompt("Digite o número da tabuada: "));

const tabuada = (num) => {
    if (isNaN(num) || !Number.isInteger(num)) {
        throw new Error("O valor digitado não é um número válido!");
    }

    const lista = [];

    for(let i = 0; i <= 10; i++) {
        const multiplicacao = i * num;
        lista.push(multiplicacao);
    }
    
    return lista;
}

try {
    const resultado = tabuada(num);
    // console.log(resultado);
    console.log("TABUADA: ")
    for (let i = 0; i <= 10; i++) {
        console.log(`${i} x ${num} = ${resultado[i]}`);
    }
} catch (e) {
    console.log(e);
}