const pessoa = {
    nome: "Ricardo",
    idade: 21,
    profissao: "Desenvolvedor Full Stack",
    hobbies: ["Futebol", "Leitura", "Viagens"]
}

const filtrarPropriedades = (obj, propriedadesPermitidas) => {
    
    const newObj = {};

    for (const prop of propriedadesPermitidas) {
        //Se meu objeto tiver essa propriedade
        if(obj.hasOwnProperty(prop)) {
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

const propriedadesPermitidas = ["nome", "profissao"];

const resultado = filtrarPropriedades(pessoa, propriedadesPermitidas);
console.log(resultado);