const input = document.querySelector('#filtro');

input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        const valorInput = input.value;
        const li = document.querySelectorAll('li');

        for (let items of li) {
            if(items.textContent !== valorInput) {
                items.remove('li');
            }
        }
    }

})

/*Resolução dele 
function filtrarLista() {
    const filtro = document.querySelector('#filtro').value.toUpperCase();//O valor que o input receberá, transformando tudo em maiúscula

    const lista = document.querySelector('#listaDeItens');

    const itens = lista.getElementsByTagName('li');//Pega os elementos que possuem a tag li

    for (let i = 0; i < itens.length; i++) {
        const item = itens[i];//itera e armazena cada li

        const texto = item.textContent || item.innerText;//Itera e armazena o valor de cada li

        item.style.display = texto.toUpperCase().includes(filtro) ? "" : "none";
    }
}

const inputFiltro = document.querySelector("#filtro");

inputFiltro.addEventListener("keyup", filtrarLista);
*/

