const nome = document.querySelector('.nome');
const altura = document.querySelector('.altura');
const idade = document.querySelector('.idade');
const nacionalidade = document.querySelector('.nacionalidade');

for (let i = 0; i < 4; i++) {
    if(i === 0) {
        nome.style.color = 'blue';
    }
    if(i === 1) {
        altura.style.color = 'yellow';
    }
    if(i === 2) {
        idade.style.color = 'brown';
    }
    if(i === 3) {
        nacionalidade.style.color = 'green';
    }
}