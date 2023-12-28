// Cadastrando e modificando um objeto(caneca).

function caneca(cor, forma, peso, capacidade, preco) {
    this.cor = cor;
    this.forma = forma;
    this.peso = peso;
    this.capacidade = capacidade;
    this.preco = preco;
}

let entrada = prompt("Gostaria de cadastrar uma caneca?")
while (entrada.toLowerCase() != "sair") {

    const canecaNova = new caneca();

    canecaNova.cor = prompt("Qual é a cor da caneca?");
    canecaNova.forma = prompt("Qual é o formato da caneca?");
    canecaNova.peso = prompt("Qual é o peso da caneca?");
    canecaNova.capacidade = prompt("Qual é a capacidade da caneca?");
    canecaNova.preco = prompt("Qual é o preço da caneca?");

    console.log(canecaNova);

    entrada = prompt("Deseja modificar a caneca cadastrada? (Digite 'sair' para encerrar o programa)");
}