const qtd = 2;
const lista = [];
for (let i = 0; i < qtd; i++) {
    lista[i] = Number(prompt("Digite um número: "));
}

const verificaDivisibilidade = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Os valores digitados precisam ser números!");
    }

    return num1 % num2 === 0;
}

try {
    const resultado = verificaDivisibilidade(lista[0], lista[1]);
    console.log(`O número ${lista[0]} é divisível por ${lista[1]}? ${resultado ? "Sim" : "Não"}`);
} catch (e) {
    console.log(e);
}