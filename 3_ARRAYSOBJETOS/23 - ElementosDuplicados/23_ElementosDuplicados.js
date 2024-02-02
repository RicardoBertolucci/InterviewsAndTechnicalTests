/* Minha Solução */

const array = [1, 6, 2 , 3, 4, 5, 2 , 6 , 1, 3];

const elDuplicado = (array) => {
    const lista = [];
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i];
        let contador = 0;

        for (let k = 0; k < array.length; k++) {
            if(elemento === array[k]) {
                contador++;
            }
        }
        
        if(contador === 1) {
            lista.push(array[i]);
        }
    }

    return lista;
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
