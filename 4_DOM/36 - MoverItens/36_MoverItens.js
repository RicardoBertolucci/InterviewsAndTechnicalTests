//Minha resolução
// const lista = document.querySelector('.lista');

// const li = lista.getElementsByTagName('li');

// const buttonTop = document.querySelector('.btn-up');
// const buttonBottom = document.querySelector('.btn-down');

// const buttonUp = (buttonTop) => {
//     buttonTop.addEventListener('click', (e) => {
//         console.log('Cliquei em subir!');
//     })
    
// }

// const buttonDown = (buttonBottom) => {
//     console.log('Cliquei em descer!');
// }



// lista.addEventListener('click', (e) => {
//     const el = e.target;

//     for (let i = 0 ; i < li.length; i++) {
//         if(li[i].classList.contains('selecionado')) {
//             li[i].classList.remove('selecionado');
//         };
//     };

//     el.classList.add('selecionado');

//     let escolhido;

//     for (let i = 0 ; i < li.length; i++) {
//         if(li[i].classList.contains('selecionado')) {
//             escolhido = li[i];
//         };
//     };


    
//     buttonTop.addEventListener('click', buttonUp());
//     buttonBottom.addEventListener('click', buttonDown());
// })