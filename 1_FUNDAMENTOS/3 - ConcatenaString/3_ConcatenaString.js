const nome = prompt("Digite um nome:" );
const idade = Number(prompt("Digite uma idade:" ));
const cidade = prompt("Digite uma cidade: ");

const concatenaString = (nome, idade, cidade) => {
    if(!isNaN(nome) || !isNaN(cidade)) {
        throw new ReferenceError("nome e cidade devem ser dados de tipo string");
    }  

    if(isNaN(idade)) {
        throw new ReferenceError("idade precisa sem um dado do tipo number");
    }

    return [nome, idade, cidade];
}

try {
    const resultado = concatenaString(nome, idade, cidade);
    console.log(`Sou ${resultado[0]} tenho ${resultado[1]} anos e moro em ${resultado[2]}`);
}catch(error) { 
    console.log(error);
}