const temporizador = (seg, acao) => {
    setTimeout(acao, seg * 1000);
}

temporizador(3, () => {
    console.log('Se passaram 3 segundos!');
});