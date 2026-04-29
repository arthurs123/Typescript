// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa


let i;
let pares=[]
let impares=[]
let mult=[]

const vetor = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(i=0; i< vetor.length;i++){
    if (vetor[i] %2==0){
        pares.push(vetor[i])
    }
     if (vetor[i] %2!=0){
        impares[i]=vetor[i]
    }
    if (vetor[i] %2==0 && vetor[i] %3==0 && vetor[i] %4==0){
        mult[i]=vetor
     }
        
};