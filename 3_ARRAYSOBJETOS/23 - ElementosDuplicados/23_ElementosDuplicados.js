/* Minha Solução */

const array = [1, 6, 2 , 3, 4, 5, 2 , 6 , 1, 3, 7];

const elDuplicado = (array) => {
    for (let i = 0; i < array.length; i++) {
        let elAtual = array[i];
        let contador = 0;

        for (let j = 0; j < array.length; j++) {
            if(elAtual === array[j]) {
                if(contador >= 1) {
                    array.splice(j, 1);
                }
                contador++;
            }
        }
    }

    return array;
}

const resultado = elDuplicado(array);
console.log(resultado);

/* Solucação dele
Método Set - Cria um array com base em um outro array, ele por si só já remove elementos duplicados


function removerDuplicatas(arr) {
    return Array.from(new Set(arr));
}

const arrayOriginal = [1, 2, 2, 3, 3, 4, 5, 6, 6, 7];

const arraySemDuplicatas = removerDuplicatas(arrayOriginal);

console.log(`Array original: [${arrayOriginal.join(", ")}]`);
console.log(`Array original: [${arraySemDuplicatas.join(", ")}]`);
*/
