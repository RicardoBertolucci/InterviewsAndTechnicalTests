//Minha resolução
const botao = document.querySelector('.btn-add');

const criaLi = () => {
    const li = document.createElement('li');
    return li;
}

botao.addEventListener("click", function (e) {
    const ul = document.querySelector('ul');

    let li = criaLi();

    li.innerText = 'Drinks';

    ul.appendChild(li);
});

/*Resolução dele 
function adicionarItem() {
    const novoItem = document.createElement('li');

    novoItem.textContent = "Novo Item";

    document.querySelector(".lista").appendChild(novoItem);
}

const botao = document.querySelector('.btn-add');

botao.addEventListener("click", adicionarItem);
*/

