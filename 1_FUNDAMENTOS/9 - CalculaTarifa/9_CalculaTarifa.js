const idade = Number(prompt("Digite sua idade:"));
const estudante = prompt("Você é um estudante ?(Sim ou Não)").toLowerCase();
const tarifa = 2.50;

const calculaTarifa = (tarifa, idade, estudante) => {
    if(isNaN(idade) || idade === 0) {
        throw new Error("O valor idade não é um número válido ou um tipo de dado number.");
    }

    if(idade < 6) {
        return 0;
    } 
    
    if (estudante === 'sim') {
        const desconto = tarifa / 2;
        tarifa = tarifa - desconto;
        return tarifa;
    }

    if(idade >= 60) {
        const desconto = (tarifa * 30) / 100;
        tarifa = tarifa - desconto;
        return tarifa;
    }

    return tarifa;
}

try {
    const resultado = calculaTarifa(tarifa, idade, estudante);
    console.log(`O valor a ser cobrado será de R$${resultado}
    `);
} catch(e) {
    console.log(e);
}