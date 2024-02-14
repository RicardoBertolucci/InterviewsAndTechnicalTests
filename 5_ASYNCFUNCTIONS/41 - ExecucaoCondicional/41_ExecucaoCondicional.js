//Minha resolução
const condicao = (verifica, executa, naoExecuta) => {
    let n1 = 4;
    let n2 = 23;

    const condicaoRetornada = verifica(n1, n2);
    console.log(condicaoRetornada);
    
    if(condicaoRetornada === true) {
        const resposta = executa(n1,n2);
        console.log(resposta)
    } else {
        const resposta = naoExecuta(n1,n2);
        console.log(resposta);
    }
}

const verifica = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)) {
        return false;
    } else {
        return true;
    }
}

const executa = (num1, num2) => {
    const soma = num1 * num2;
    return `O valor da multiplicação de ${num1} e ${num2} é: ${soma}`;
}

const naoExecuta = (num1, num2) => {
    return `O valor de ${num1} ou o valor de ${num2} não é um valor do tipo NUMBER`;
}

const resultado = condicao(verifica, executa, naoExecuta);

/*Resolução dele 
function execucaoCondicional(verificar, executar, naoExecutar) {
    if(verificar()) {
        executar();
    } else {
        naoExecutar();
    }
}

execucaoCondicional(
    () => 5 > 30,
    () => console.log("5 é maior que 3"),
    () => console.log("Condição inválida!")
);
*/