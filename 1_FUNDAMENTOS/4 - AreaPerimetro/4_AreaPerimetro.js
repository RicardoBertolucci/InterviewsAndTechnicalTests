const comprimento = Number(prompt("Digite o comprimento: "));
const largura = Number(prompt("Digite uma largura"));

const areaPerimetro = (comprimento, largura) => {
    if(isNaN(comprimento) || isNaN(largura)) {
        throw new Error("Comprimento e largura precisam ser dados do tipo number");
    }

    const area = comprimento * largura;

    const perimetro = 2 * (comprimento + largura);

    return [perimetro, area];
}

try {
    const resultado = areaPerimetro(comprimento, largura);
    console.log(`Perímetro:${resultado[0]} | Área:${resultado[1]}`);
} catch(error) {
    console.error(error);
}