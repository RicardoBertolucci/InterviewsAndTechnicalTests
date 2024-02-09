const btnAbrir = document.querySelector('#abrir');
const btnFechar = document.querySelector('.close');
const modal = document.querySelector('.modal');

(function funcionalidadesModal (e) {
    btnAbrir.addEventListener('click', () => {
        modal.style.display = "block";
    });

    btnFechar.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (e) => {
        if(e.target === document.querySelector('#myModal')) {
            modal.style.display = 'none';
        }
    })
})();

