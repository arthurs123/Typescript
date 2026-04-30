export function questao3array():void{
    // 3. Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
// adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
// ● Permitir que o usuário adicione itens à lista(array) até que ele digite &quot;fim&quot;.
// ● Permitir que o usuário apresente todos os itens da lista.
// ● Permitir que o usuário apresente quantos itens há na lista.
// ● Permitir que o usuário remova itens da lista.



function gerar_lista_compras(){
let vetor=[]
let op:string
let escolha:number
let remove:string
let itemRemove
    
    escolha=Number(prompt("O que você deseja?: 1-adicionar itens, 2-Ver itens, 3-quantidade de itens, 4-Remover itens, 5-sair"))
    while(escolha!=5){
        if (escolha==1){
            op=String(prompt("Digite o nome do item que deseja adicionar ou fim para parar de digitar: "))
                while(op.toUpperCase()!="FIM"){
                    vetor.push(op)
                    op=String(prompt("Digite o nome do item que deseja adicionar ou fim para parar de digitar: "))
                }
        }
        else if (escolha==2){
            console.log(vetor)
        }
        else if(escolha==3){
            
            console.log(vetor.length)
        }
        else if(escolha==4){
            remove=String(prompt("Escreva qual item deseja remover: "))
            itemRemove=vetor.indexOf(remove)

            if (itemRemove != -1){
                vetor.splice(itemRemove,1)
            
            }
            else{
                console.log("Item não encontrado")
            }
            
        }
        escolha=Number(prompt("O que você deseja?: 1-adicionar itens, 2-Ver itens, 3-quantidade de itens, 4-Remover itens, 5-sair"))

    }
}
gerar_lista_compras()
}
