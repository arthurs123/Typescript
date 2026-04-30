export function questao6array():void{
// 6. Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
// a) Pedir os nomes das pessoas usando o Prompt e o método push();
// b) Apresentar os nomes digitados;
// c) Ordenar o vetor usando o sort();
// d) Apresentar os nomes inseridos de forma ordenada.


let vetor=[]
let i:number
let nome:string


for(i=1;i<=5;i++){
    nome=String(prompt("Digite os nomes: "))
    vetor.push(nome)
    
}
console.log(`Nomes: ${vetor}`)
console.log(`Nomes em ordem: ${vetor.sort()}`)
}