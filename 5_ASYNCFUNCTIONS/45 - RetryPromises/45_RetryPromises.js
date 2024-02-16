function tentativa (callback, maxTentativas, intervalo) {
    return new Promise(async (resolve, reject) => {
        for(let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
            try {
                const resultado = await callback();
            
                return resolve(resultado);
            } catch (erro) {
                if (tentativa === maxTentativas) return reject(erro);

                await new Promise((r) => setTimeout(r, intervalo));
            }
        }
    });
}

const fetchComRetry = () => fetch("https://lalalala.com.br")

tentativa(fetchComRetry, 3, 2000)
    .then((response) => response.json())
    .then((dados) => console.log(dados))
    .catch((erro) => console.log('Erro, após 3 tentaivas', erro));