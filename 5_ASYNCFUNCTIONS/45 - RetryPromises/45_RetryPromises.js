const acessoAPI = async (dados, tentativas, temp) => {
    let contador = 0;
    
    try {
        if(contador < tentativas) {
            contador++;
            dados()
                .then((res) => res.json())
                .then((valor) => console.log(valor))
                .catch(() => acessoAPI());
        }
    } catch (e) {
        console.error(e);
    }
};

const API = async () => {
    const url = await fetch('https://jsonplaceholder.typicode.com/posts/1r');

    return url;
}

acessoAPI(
    API,
    maxTentaivas = 3,
    timer = 5
);