const simularAPI = (resultado, demora) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(resultado);
        }, demora);
    });

}

simularAPI("Olá mundo!", 1000).then((resultado) => {
    console.log(resultado);
});

/*
Declaração da Função simularAPI:

A função simularAPI é uma função de seta (arrow function) que recebe dois parâmetros: resultado e demora.
resultado: Este parâmetro representa o valor que será retornado após o atraso especificado.
demora: Este parâmetro representa o tempo de atraso em milissegundos antes que a Promise seja resolvida.
Retorno de uma Promise:

Dentro da função simularAPI, uma nova Promise é criada. Uma Promise representa um valor que pode estar disponível imediatamente, no futuro ou nunca. No caso, ela estará disponível no futuro.
A função setTimeout é utilizada para simular um atraso de tempo antes da resolução da Promise. Este atraso é especificado pelo parâmetro demora.
Após o atraso, a Promise é resolvida com o valor passado como argumento para a função resolve, ou seja, resultado.
Chamada da Função simularAPI:

Fora da definição da função simularAPI, há uma chamada dela com os argumentos "Olá mundo!" e 1000.
Isso significa que estamos solicitando que a função simularAPI simule uma chamada de API com o resultado "Olá mundo!" após um atraso de 1000 milissegundos (ou seja, 1 segundo).
Tratamento da Promise com then:

Após a chamada da função simularAPI, o método then é encadeado.
O método then é utilizado para lidar com o resultado da Promise após ela ser resolvida com sucesso.
Quando a Promise é resolvida, o callback passado para o then é invocado e o valor resolvido pela Promise é passado como argumento para esse callback.
No exemplo, o resultado resolvido é simplesmente impresso no console usando console.log(resultado).
Fluxo de Execução:

A função simularAPI é chamada com os argumentos "Olá mundo!" e 1000.
Dentro da função simularAPI, é criada uma Promise que resolve com o valor "Olá mundo!" após 1 segundo de atraso.
Após 1 segundo, a Promise é resolvida e o valor "Olá mundo!" é passado para a função then.
O callback do then é invocado e imprime o valor "Olá mundo!" no console.
*/