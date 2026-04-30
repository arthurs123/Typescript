export function questao3cond():void{
    // 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case


let num1:number=Number(prompt("Digite o primeiro numero: "))
let operacao:string=String(prompt("Digite o operador que deseja (+,-,*,/): "))
let num2:number=Number(prompt("Digite o segundo numero: "))

let resultado
switch(operacao){
    case "+":
        resultado=num1+num2
        break
    case "-":
        resultado=num1-num2
        break
    case "*":
        resultado=num1*num2
        break
    case "/":
        if (num2%2===0){
            console.log("Divisão por 0")
        }
        resultado=num1/num2
        break
    
    
}
console.log(resultado)

}



