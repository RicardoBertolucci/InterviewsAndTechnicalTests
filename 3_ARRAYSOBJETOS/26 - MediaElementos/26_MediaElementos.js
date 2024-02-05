const elementos = [1 , 2, 3, 4, 5, 6, 7, 10, 12];

const mediaElementos = (num) => {
    const valorTotal = num.reduce((ac, val) => {
        return ac += val;
    }, 0);

    return valorTotal / num.length;

}

const resultado = mediaElementos(elementos);
console.log(resultado);