const carregarDados = (url) => {
    return fetch(url).then((response) => response.json());
}

const resultado = carregarDados('https://jsonplaceholder.typicode.com/todos/1').then((dados) => console.log(dados));

// const resultado2 = carregarDados('https://jsonplaceholder.typicode.com/todos/1');
// console.log(resultado2);