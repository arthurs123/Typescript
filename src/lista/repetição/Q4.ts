export function questao4rep():void{
    // 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.


let Qpares=0
let Qimpares=0
let num:number=Number(prompt("Digite o numero ou -1 para sair: "))

while(num!=-1){
    if (num %2==0){
        Qpares++
    }
    else if(num%2!=0){
        Qimpares++
    }
    num=Number(prompt("Digite o numero ou -1 para sair: "))
}
console.log(`Pares ${Qpares}`)
console.log(`Impares ${Qimpares}`)
}





