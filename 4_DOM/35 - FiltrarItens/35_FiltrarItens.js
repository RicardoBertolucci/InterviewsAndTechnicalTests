const input = document.querySelector('#filtro');

input.addEventListener('keyup', () => {
    const valorInput = input.value.toLowerCase();
    const li = document.querySelectorAll('li');

    for (let items of li) {
        items.style.display = items.textContent.toLowerCase().includes(valorInput) ? '' : "none";
    }
})

/*Resolução dele 
function filtrarLista() {
    const filtro = document.querySelector('#filtro').value.toUpperCase();//O valor que o input receberá, transformando tudo em maiúscula

    const lista = document.querySelector('#lista');

    const itens = lista.getElementsByTagName('li');//Itera sobre a div e pega os elementos li(Isso antes do laço)

    for (let i = 0; i < itens.length; i++) {
        const item = itens[i];//Itera sobre os itens(li) armazenados e guarda o valor do li em item

        const texto = item.textContent || item.innerText;//Armazena o valor do conteúdo de cada li
        
        item.style.display = texto.toUpperCase().includes(filtro) ? "" : "none";
        //includes(filtro) verifica se o texto maiúsculo do item contém o valor do filtro, se caso for verdadeiro, 
        //o valor digitado não sofre nenhuma alteração e o valor é exibido normalmente, caso seja falso, o valor é ocultado
    }
}

const inputFiltro = document.querySelector("#filtro");

inputFiltro.addEventListener("keyup", filtrarLista);
*/

