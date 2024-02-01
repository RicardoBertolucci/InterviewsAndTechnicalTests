const string = prompt("Digite uma palavra ou frase: ").toLowerCase();

const contaVogais = (palavra) => {
    let contador = 0;
    for (let i = 0; i < palavra.length; i++) {
        if(palavra[i] === "a" || palavra[i] === "e" || palavra[i] === "i" || palavra[i] === "o" || palavra[i] === "u") {
            contador++;
        }
    }

    return contador;
}

const resultado = contaVogais(string);
console.log(resultado);