// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo



let num:number=Number(prompt("Informe um numero: "))

if (num %2==0){
    console.log("Par")
}
if(num%2!=0){
    console.log("Impar")
}
if (num>0){
    console.log("Positivo")
}
if (num<0){
    console.log("Negativo")
}