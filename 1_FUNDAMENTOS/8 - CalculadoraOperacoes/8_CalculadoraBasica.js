const num1 = Number(prompt("Digite o número A: "));
const num2 = Number(prompt("Digite o número B: "));
const exp = Number(prompt("Você deseja fazer qual operação ? 0 = adição | 1 = subtração | 2 = multiplicação | 3 = divisão"));

const calculadoraBasica = (a, b, exp) => {
    const verificaOperacao = () => {
        if (isNaN(exp)) {
            throw new Error("A operação desejada, não representa nenhuma das listas anteriormente.");
        }

        if (exp !== 0 && exp !== 1 && exp !== 2 && exp !== 3) {
            throw new Error("A operação desejada, não existe ou não foi declarada.");
        }
 
        if(isNaN(a) || isNaN(b)) {
            throw new Error("O valor de A ou B não é um número");
        }

        return exp;
    }

    const operacao = verificaOperacao();

    let valor;
    switch (operacao) {
        case 0:
            valor = a + b;
            return `O valor da soma de ${a} + ${b} = ${valor}`;
        case 1:
            valor = a - b;
            return `O valor da subtração de ${a} - ${b} = ${valor}`;
        case 2:
            valor = a * b;
            return `O valor da multiplicação de ${a} * ${b} = ${valor}`;
        case 3:
            valor = a / b;
            return `O valor da divisão de ${a} / ${b} = ${valor}`;
        default:
            return 'Valor inválido!';
    }
}

try {
    const resultado = calculadoraBasica(num1, num2, exp);
    console.log(resultado);
} catch (e) {
    console.log(e);
}