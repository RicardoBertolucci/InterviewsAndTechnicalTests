//Minha resolução
const numeros = {
    idade: 51,
    peso: 21,
    altura: 1.84
}

const somaPropriedade = obj => {
    //Os valores das chaves devem ser os mesmos do objeto original
    const {idade, peso, altura} = obj;
    
    return idade + peso + altura;
}

const resultado = somaPropriedade(numeros);
console.log(resultado);

/*Resolução dele 
const numerosObject = {
    a: 10,
    b: 15,
    c: 20
}

const somaValoresObjeto = (obj) => {

    let soma = 0;

    for (const chave in obj) {
        
        if(obj.hasOwnPropety(chave) && typeof obj[chave] === "number") {
            soma += obj[chave];
        }
    }

    return soma;
}

console.log(`Soma dos valores do objeto: ${somaValoresObjeto(numerosObject)}`);
*/