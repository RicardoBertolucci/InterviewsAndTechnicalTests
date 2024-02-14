async function arrayURL (urls) {
    const lista = [];

    for (let url of urls) {

        const dados = await carregarDados(url);

        lista.push(dados);
    }

    return lista;
}

const carregarDados = (url) => {
    return fetch(url).then((response) => response.json());
}


const arrayURLS = ['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2', 'https://jsonplaceholder.typicode.com/comments?postId=1'];

//Por estar fetch ser baseada em promises, ele retorna uma promise, me dando opção de usar o then para pegar os dados
const resultado = arrayURL(arrayURLS).then((dados) => console.log(dados));

