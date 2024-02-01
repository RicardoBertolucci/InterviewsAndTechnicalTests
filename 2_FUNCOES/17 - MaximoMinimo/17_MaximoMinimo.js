const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));

const menorValor = (n1, n2) => {
    return Math.min(n1, n2);
}

const maiorValor = (n1, n2) => {
    return Math.max(n1, n2);
}

try {
    if(isNaN(n1) || isNaN(n2)) {
        throw new Error("Número inválido!");
    }
    console.log(`O maior valor entre ${n1} e ${n2} é ${maiorValor(n1, n2)} || O menor valor entre ${n1} e ${n2} é ${menorValor(n1, n2)}`);
} catch (e) {
    console.log(e);
}