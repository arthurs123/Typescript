export function questao5rep():void{
    // 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor &lt; 1000: Retorna &quot;Bronze&quot;
// o Se valor entre 1000 e 5000: Retorna &quot;Prata&quot;
// o Se valor &gt; 5000: Retorna &quot;Ouro&quot;
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria &quot;Ouro&quot;.


// funçao \\

const venda=(valor:number):string => {
    if (valor<1000){
        return "Bronze"
    }
    else if(valor>= 1000 && valor<5000){
        return "Prata"
    }
    else{
        return "Ouro"
    }
    
}

// let \\

let sum=0
let maiorvenda=0
let maiorVendedor=0
let countOuro=0
let i:number
let vendas:number
let classificacao

// for \\

for(i=1; i<=5; i++){
    vendas=Number(prompt("Digite o valor da venda: "))
    
    classificacao=venda(vendas)

    sum+=vendas

    if(vendas>maiorvenda){
        maiorvenda=vendas
        maiorVendedor=i
    }
    if (classificacao === "Ouro"){
        countOuro++
    }

}
alert(`O total de vendas foi de: ${sum}`)
alert(`O vendedor com maior venda foi: ${maiorVendedor}, com a venda de: ${maiorvenda}`)
alert(`Quantidade de vendedores com ouro: ${countOuro}`)
}






