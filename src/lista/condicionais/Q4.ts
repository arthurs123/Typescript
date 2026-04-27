// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.


let num1:number=Number(prompt("Digite o 1º numero: "))
let num2:number=Number(prompt("Digite o 2º numero: "))

if (num1==num2){
    console.log('Numeros iguais')
}
else if(num1>num2){
    console.log('Primeiro maior')
}
else if(num2>num1){
    console.log('Segundo maior')
}

export{};