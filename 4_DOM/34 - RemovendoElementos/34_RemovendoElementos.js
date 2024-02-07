const ul = document.querySelector('.lista');

// const botao = document.querySelector('btn-remove');

const removeItem = (li) => {
    if(li.classList.contains('item')) {
        li.remove('li');
    }
}

ul.addEventListener('click', (e) => {
    removeItem(e.target);
});