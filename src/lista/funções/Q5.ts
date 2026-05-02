export function questao5func():void{
    // 5. Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.

function mult(){
    let a:number
    let b:number

     a=Number(prompt("Digite o primeiro numero: "))
     b=Number(prompt("Digite o segundo numero: "))
    for(let i=1; i<b;i++){

        

        if(i %3==0){
            alert(`multiplos de 3: ${i}`)
        }

    }

     
}
mult()
}