// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

let sum=0
let countNum=0
let num:number=Number(prompt("Digite o número ou 0 se quiser sair: "))

while(num!=0){
    countNum++
    sum+=num
    num=Number(prompt("Digite o número ou 0 se quiser sair: "))
}
console.log(`Quantidade de numeros: ${countNum}`)
console.log(`A soma dos numeros: ${sum}`)

export{}