const numeros = [1 , 2, 3, 4, 5, 6];
const strings = ["Treinando", "Numeros", "McDonalds"];

const concatenaArrays = (arrNum, arrStr) => {
    return arrNum.concat(arrStr);
}

const resultado = concatenaArrays(numeros, strings);
console.log(resultado);