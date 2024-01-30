//0 - 12 | 13 - 17 | 18 - 59 | 60 ou +
const classifica = Number(prompt("Digite sua idade: "));

const classificacaoEtaria = (num) => {
    if(isNaN(num)) {
        throw new Error(`O valor digitado precisa ser um número!`);
    }

    if(num <= 0) return 'Valor inválido!';
    if(num > 0 && num < 13) return 'Criança';
    if(num >= 13 && num < 18) return 'Adolescente';
    if(num >= 18 && num < 60) return 'Adulto';
    if(num >= 60) return 'Idoso';

}

try {
    const resultado = classificacaoEtaria(classifica);
    console.log(`Você se classifica como: ${resultado}`);
}catch(e){
    console.error(e);
}

