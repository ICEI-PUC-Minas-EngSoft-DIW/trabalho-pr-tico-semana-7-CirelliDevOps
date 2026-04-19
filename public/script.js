let nome = ("Digite seu nome: ");

let renda = ("Digite sua renda: ");

while (isNaN(renda)){
    renda = Number(prompt("Valor invalido! Digite um valor para a renda mensal: "));
}

let qtd = Number(prompt("Quantas despesas deseja informar (1 a 5): "));

while (isNaN(qtd)){
    qtd = Number(prompt("Digite um numero valido de despesas: "));
}

if (qtd < 1) qtd = 1;
if (qtd > 5) qtd = 5;

let totalDespesas = 0;
let despesa = 0;

for (let i = 1; i <= qtd; i++) {
    let despesa = Number(prompt(`Digite o valor da despesa ${i}: `));
}

totalDespesas += despesa;

let mensagem = " ";

let sobra = renda - totalDespesas;

if (totalDespesas > renda){
    mensagem = "Gasto maior que ganho mensal"
} else {
    if (sobra >= renda * 0.3) {
        mensagem = "Gasto perfeito, ha margem de sobra"
    }else{
        mensagem = "Gasto ok previsa melhorar"
    }
}

let resultado = `
Nome: ${nome} 
Renda: R$ ${renda.toFixed(2)} 
Despesas: R$ ${totalDespesas.toFixed(2)} 
Sobra: R$ ${sobra.toFixed(2)} ${mensagem}`;

alert(resultado);
console.log(resultado);