const unidadeDeMedida = Number(prompt("Qual unidade de medida você deseja ? (Celsius = 1 | ou | Fahrenheit = 2)"));

if(unidadeDeMedida !== 1 && unidadeDeMedida !== 2) console.log(`O valor ${unidadeDeMedida} é inválido!`);

if(unidadeDeMedida === 1) {
    const temp = Number(prompt("Digite a temperatura em graus celsius: "));
    
    const converte = (temp * 9/5) + 32;
    console.log(`O valor da temperatura em graus fahrenheit é: ${converte.toFixed(2)}`);
}

if(unidadeDeMedida === 2) {
    const temp = Number(prompt("Digite a temperatura em graus fahrenheit: "));

    const converte = (temp - 32) *  5/9;
    console.log(`O valor da temperatura em graus celsius é: ${converte.toFixed(2)}`);
}