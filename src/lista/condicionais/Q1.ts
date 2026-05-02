export function questao1cond():void{
    // 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo



let num:number=Number(prompt("Informe um numero: "))

if (num %2==0){
    alert("Par")
}
if(num%2!=0){
    alert("Impar")
}
if (num>0){
    alert("Positivo")
}
if (num<0){
    alert("Negativo")
}

}




