// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.


let numb1:number=Number(prompt("Digite o 1º numero: "))
let numb2:number=Number(prompt("Digite o 2º numero: "))

if (numb1==numb2){
    console.log('Numeros iguais')
}
else if(numb1>numb2){
    console.log('Primeiro maior')
}
else if(numb2>numb1){
    console.log('Segundo maior')
}