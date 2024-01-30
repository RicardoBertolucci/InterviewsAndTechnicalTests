const altura = Number(prompt("Digite uma altura: "));
const peso = Number(prompt("Digite um peso: "));

const calculaIMC = (altura, peso) => {
    if (isNaN(altura) || isNaN(peso)) {
        throw new ReferenceError('O valor de altura e peso precisam ser números');
    }

    const resultado = peso / (altura * altura);
    return resultado.toFixed(2);
}

try {
    console.log("IMC: ", calculaIMC(altura, peso));
} catch (error) {
    console.log(error);
}