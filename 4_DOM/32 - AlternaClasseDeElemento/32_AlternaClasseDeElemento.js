const botao = document.querySelector('.btn');

botao.addEventListener('click', function (e) {
    const div = document.querySelector('div');

    if (div.classList.contains('ativo')) {
        div.classList.remove('ativo');
    } else {
        div.classList.add('ativo');
    }
})