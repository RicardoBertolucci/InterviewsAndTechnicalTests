

/* JS dele
//Esse argumento event, vem de qualquer evento que veja a ter na página
const toggleAccordion = (event) => {
    const header = event.target;//Cada título do accordion que foi clicado
    const content = header.nextElementSibling;//Próximo elemento irmão, ou seja, tudo dentro dele obedece o display

    //Verificação para saber se o conteúdo está com display none, no caso, "" também é none
    if(content.style.display === "none" || content.style.display === "") {
        //Fecha todos os accordions, já que um vai ser aberto, não permitindo que eles fiquem abertos juntos
        closeAllAcordionContent();
        //Abre o accordion sleecionado
        content.style.display = 'block';
    } else {
        //Fecha o accordion selecionado, se não estiver com display none
        content.style.display = 'none';
    }
}

const closeAllAcordionContent = () => {
    //Pega todos os conteúdos que tenham a classe .accordion-content
    const contents = document.querySelectorAll('.accordion-content');

    //Fecha um a um com display none
    contents.forEach((content) => (content.style.display = 'none'));
}

const headers = document.querySelectorAll('.accordion-header');
headers.forEach((header) => {
    //header é cada título
    //Quando tiver qualquer evento de click em algum desses headers, aciona a função toggleAccordion
    header.addEventListener('click', toggleAccordion)
});
*/