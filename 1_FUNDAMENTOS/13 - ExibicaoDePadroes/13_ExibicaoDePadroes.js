const num = Number(prompt("Digite um número inteiro maior que zero: "));

const padrao = (index) => {
    let armazena = '*';
    
    for(let i = 1; i <= index; i++) {
        if(i === index) {
            return armazena;
        } else {
            armazena += '*';
        }
    }
}

const padraoRegressivo = (index) => {
    let armazena = "*".repeat(index);
    
    return armazena;
}

try {
    if(isNaN(num) || num < 1) {
        throw new Error("O valor digitado não é um número inteiro ou um número maior que zero!");
    }
    
    for(let i = 1; i <= num; i++) {
        if(padrao(i)) {
            console.log(padrao(i));
        }
    }

    for(let i = num; i >= 1; i--) {
        if(padraoRegressivo(i)) {
            console.log(padraoRegressivo(i));
        }
    }

} catch(e) {
    console.log(e);
}