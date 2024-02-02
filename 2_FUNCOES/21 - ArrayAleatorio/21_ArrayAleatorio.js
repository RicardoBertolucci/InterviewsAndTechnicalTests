const tam = Number(prompt("Digite o tamanho do array: "));
const valorMin = Number(prompt("Digite o valor mínimo do array: "));
const valorMax = Number(prompt("Digite o valor máximo do array: "));

const arrayAleatorio = (tam, min, max) => {
    const lista = [];
    for(let i = 0; i < tam; i++) {
        const random = Math.random() * (max - min) + (min);
        lista.push(Math.round(random));
    }
    
    return lista;
}

try {
    if (isNaN(tam) || isNaN(valorMin) || isNaN(valorMax)) {
        throw new Error("Tamanho, Valor Mínimo e Valor Máximo devem ser números!");
    }

    if (!Number.isInteger(tam) || !Number.isInteger(valorMin) || !Number.isInteger(valorMax)) {
        throw new Error("Tamanho, Valor Mínimo e Valor Máximo devem ser inteiros!");
    }

    const resultado = arrayAleatorio(tam, valorMin, valorMax);
    console.log(resultado);
} catch (e) {
    console.error(e);
}
