const mapearArray = (array, callback) => {
    const lista = [];

    for (let i = 0; i < array.length; i++) {
        let valor = array[i];
        lista.push(transformacao(valor));
    }

    return lista;
}

const transformacao = (num) => {
    return num * 2;
}

const vetor = [1, 2, 3, 4, 5];

const resultado = mapearArray(vetor, transformacao);
console.log(resultado);