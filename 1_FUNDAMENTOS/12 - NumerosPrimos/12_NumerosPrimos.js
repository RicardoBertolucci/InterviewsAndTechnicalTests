const num = Number(prompt("Digite um número inteiro N:"));

const ehPrimo = (num) => {
    if(isNaN(num) || !Number.isInteger(num) || num <= 1) {
        throw new Error("O valor digitado é inválido!");
    }

    for(let i = 2; i * i <= num; i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

try {
    for(let i = 2; i <= num; i++) {
        if(ehPrimo(i)) {
            console.log(i);
        }
    }
} catch (e) {
    console.log(e);
}
