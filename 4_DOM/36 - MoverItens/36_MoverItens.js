//Minha resolução
const lista = document.querySelector('.lista');

const li = lista.getElementsByTagName('li');

const buttonTop = document.querySelector('.btn-up');
const buttonBottom = document.querySelector('.btn-down');

const buttonUp = (buttonTop) => {
    buttonTop.addEventListener('click', (e) => {
        console.log('Cliquei em subir!');
    })
    
}

const buttonDown = (buttonBottom) => {
    console.log('Cliquei em descer!');
}



lista.addEventListener('click', (e) => {
    const el = e.target;

    for (let i = 0 ; i < li.length; i++) {
        if(li[i].classList.contains('selecionado')) {
            li[i].classList.remove('selecionado');
        };
    };

    el.classList.add('selecionado');

    let escolhido;

    for (let i = 0 ; i < li.length; i++) {
        if(li[i].classList.contains('selecionado')) {
            escolhido = li[i];
        };
    };


    
    buttonTop.addEventListener('click', buttonUp());
    buttonBottom.addEventListener('click', buttonDown());
})


/*Resolução Dele 
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
*/
