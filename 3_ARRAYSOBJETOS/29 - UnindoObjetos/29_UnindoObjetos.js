//Exemplo 1
// const pessoa = {
//     nome: "Ricardo",
//     idade: 21
// }

// const endereco = {
//     rua: "Irineu Machado",
//     numero: 246
// }

// const unindoObjetos = (obj1, obj2) => {
//     let newObj = {...obj1, ...obj2};
//     console.log(newObj);
// }

// const resultado = unindoObjetos(pessoa, endereco);

const pessoa = { nome: "Emanuelly", idade: 22 };
const endereco = { rua: "José Ricardo dos Santos Nascimento", numero: 46};

const unindoObjetos = (pes, end) => {
    const newObj = Object.assign(pes, end);
    return newObj;
}

const resultado = unindoObjetos(pessoa, endereco);
console.log(resultado);