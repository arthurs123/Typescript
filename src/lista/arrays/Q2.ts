// 2. Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.


let notas

notas=Number(prompt("Digite as notas ou -1 para encerrar: "))

let countNotas=0
let sum=0
let media=0
let maiorNota=0
let vetorNota:number[]=[]
while (notas!= -1){
    vetorNota.push(notas)
    countNotas++
    sum+=notas
    
   
  
    notas=Number(prompt("Digite as notas ou -1 para encerrar: "))
      media=sum/countNotas
       if (notas>media){
        maiorNota++
    }
}

console.log(`Notas: ${vetorNota.join(", ")}`)
console.log(`Notas inversas: ${vetorNota.reverse()}`)
console.log(`Soma das notas: ${sum}`)
console.log(`Media: ${media}`)
console.log(`Nota maior que a media: ${maiorNota}`)