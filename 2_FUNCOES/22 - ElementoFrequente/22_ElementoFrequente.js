/* Minha resolução 
const numeros = [12, 15, 20, 10, 20, 13, 20, 13, 13];

const elFrequente = (array) => {
    let lista = [];
    for (let i = 0; i < array.length; i++) {
        let elAtual = array[i];
        let contador = 0;
        for (let j = i; j < array.length; j++) {
            console.log(elAtual);
            if (elAtual === array[j + 1]) {
                contador++;
            }
        }

        lista.push(contador);
    }

    const maisRepeticao = Math.max(...lista);
    
    for(let k = 0; k < lista.length; k++) {
        if(lista[k] === maisRepeticao) {
            return array[k];
        }
    }
}

try {
    const resultado = elFrequente(numeros);
    console.log(`O número com maior quantidade de repetições é ${resultado}`);
    
} catch (e) {
    console.error(e);
}
*/

/* Resolução dele 
function elementosMaisFrequente(arr) {

    const contador = {};

    let elemento = arr[0];

    let maxContagem = 1;

    for (const valor of arr) {
        if(!contador[valor]) {
            contador[valor] = 1;
        } else {
            contador[valor]++;
        }

        if(contador[valor] > maxContagem) {
            maxContagem = contador[valor];

            elemento = valor;
        }
    }

    return [elemento, maxContagem];
}

const numeros = [2, 3, 4, 2, 1, 5, 2, 1, 4];

const resultadoFrequencia = elementosMaisFrequente(numeros);
console.log(`O elemento mais frequente no array é ${resultadoFrequencia[0]}, ele apareceu ${resultadoFrequencia[1]} vezes`);
*/
