// Minha resolução
const arr1 = [1, 2, 3, 4, 7, 10, 19];
const arr2 = [1, 6, 19, 4, 8, 1];

const intersecao = (arr1, arr2) => {
    const maiorVetor = (arr1, arr2) => {
        const vetorUm = arr1.length;
        const vetorDois = arr2.length;

        return Math.max(vetorUm, vetorDois);
    }
    
    const tam = maiorVetor(arr1, arr2);
    
    const lista = [];

    for (let i = 0; i < tam; i++) {
        let elAtual = arr1[i];

        for(let j = 0; j < tam; j++) {
            if(elAtual === arr2[j]) {
                lista.push(elAtual);
            }
        }
    }

    return Array.from(new Set(lista));
}

const resultado = intersecao(arr1, arr2);
console.log(resultado);

/*Resolução dele 
const intersecaoArrays = (arr1, arr2) => {
    return arr1.filter((elemento) => arr2. includes(elemento));
}

const arr3 = [1, 2, 3, 4, 5];
const arr4 = [4, 5, 6, 7, 8];

const arrayIntersecao = intersecaoArrays(arr3, arr4);

console.log(`A interseção entre os arrays é: [${arrayIntersecao.join(", ")}]`);
*/

