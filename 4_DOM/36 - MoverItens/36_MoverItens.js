//Minha resolução
/* Incompleta
const lista = document.querySelector('#listaMover');
const li = Array.from(lista.querySelectorAll('li'));
const botaoCima = document.querySelector('#moverCima');
const botaoBaixo5 = document.querySelector('#moverBaixo');


const selecionaEl = (el) => {
    li.forEach((liInList) => {
        if(liInList.classList.contains('selecionado')) {
            liInList.classList.remove('selecionado');
        }
    });

    el.classList.add('selecionado');
}

lista.addEventListener('click', (e) => {
    const el = e.target;
    selecionaEl(el);
})

botaoCima.addEventListener('click', (e) => {
    for (let i = 0; i < li.length; i++) {
        if(li.indexOf('selecionado') === 1) {

        }
    }
})
*/

//Resolução Dele 
function moverItem(direcao) {
    const lista = document.querySelector("#listaMover");
    const itens = Array.from(lista.querySelectorAll("li"));
    const itemSelecionado = lista.querySelector('.selecionado');

    if (!itemSelecionado) {
        alert("Selecione um item.");
        return;
    }

    const index = itens.indexOf(itemSelecionado);

    if (direcao === "cima" && index > 0) {
        lista.insertBefore(itemSelecionado, itens[index - 1]);
    } else if (direcao === "baixo" && index < itens.length - 1) {
        lista.insertBefore(itemSelecionado.nextElementSibling, itens[index]);
    }
}

function selecionarItem(event) {
    const itens = document.querySelectorAll("#listaMover li");

    itens.forEach((item) => item.classList.remove("selecionado"));

    event.target.classList.add("selecionado");
}

const itensDaLista = document.querySelectorAll("#listaMover li");

itensDaLista.forEach((item) => item.addEventListener("click", selecionarItem));

const botaoCima = document.querySelector('#moverCima');
const botaoBaixo = document.querySelector('#moverBaixo');

botaoCima.addEventListener("click", () => moverItem("cima"));
botaoBaixo.addEventListener("click", () => moverItem("baixo"));
