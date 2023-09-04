// REVISÃO

// Condicionais

let sorvete = "morango";

// se
// condicional simples
// if (sorvete == "baunilha") {
//   console.log("O sorvete sabor baunilha custa 6 reais");
// }

// condicionais compostas

// se
// if (sorvete === "baunilha") {
//   console.log("O sorvete sabor baunilha custa 6 reais");
//   // senão
// } else {
//   console.log("Não temos esse sabor aqui");
// }

// condicional aninhada

// if (sorvete === "baunilha") {
//   console.log("Você escolheu baunilha");
// } else if (sorvete === "morango") {
//   console.log("você escolheu morango");
// } else if (sorvete === "chocolate") {
//   console.log("você escolheu chocolate");
// } else {
//   console.log("Não temos esse sabor");
// }

// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'.

// let dia = "claro";

// if (dia === "claro") {
//   console.log("O dia está claro!");
// } else {
//   console.log("Está de noite");
// }

// let rj = "quente";

// if (rj === "quente") {
//   console.log("Coca-cola pra refrescar!");
// } else {
//   console.log("Está de boa!");
// }

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

// Um loop irá executar uma ação repetidas vezes até que a condição se torne falsa!.

// para a nossa variável contador = 0
// enquanto contador for <= 20
// faça contador += 1

// for (let contador = 0; contador <= 20; contador += 2) {
//   console.log(contador);
// }

// let contador = 0;
// // enquanto
// while (contador < 20) {
//   console.log((contador += 2));
// }

// faz primeiro a ação
// let contador = 0;
// do {
//   console.log((contador += 2));
// } while (contador < 20);
// vai verificar a condição

// crie uma função que retorne o triplo do número recebido
// no parâmetro da função

// function triplo(primeiroValor) {
//   console.log(primeiroValor * 3);
// }
// triplo(5);
// triplo(768);
// triplo(1.567);

// let numero = 5;
// if (numero === 5) {
//   console.log(numero * 3);
// }

//05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

// function exibirInfo(nome, idade, musica) {
//   console.log(nome, idade, musica);
//   console.log(`Meu nome é ${nome} tenho ${idade} e gosto de ${musica}`);
// }
// exibirInfo("Torres", 22, "rock");
// exibirInfo("Naiara", 19, "sertanejo");

//08 - crie uma função que  verifique se uma  variável é true ou false

let variavel = true;

// function verificar() {
//   // console.log(`A variável é ${variavel}`);
//   if (variavel === true) {
//     console.log("A variável é verdadeira!");
//   } else {
//     console.log("A variavel é falsa!");
//   }
// }
// verificar();

// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.

let cadastro = [
  {
    nome: "Merry",
    idade: 16,
    telefone: 123,
    amigos: ["João", "Naiara", "Allan", "Agata"]
  },
  {
    nome: "Bruno",
    idade: 16,
    telefone: 123,
    amigos: ["Ester", "Savio", "Pietro", "Rafael"]
  },
  {
    nome: "Eliane",
    idade: 16,
    telefone: 123,
    amigos: ["Bruno", "Isaque", "Carla", "Luiz"]
  },
  {
    nome: "Santiago",
    idade: 16,
    telefone: 123,
    amigos: ["Janiele", "Iuri", "Muslin", "Isaque"]
  },
  {
    nome: "David",
    idade: 16,
    telefone: 123,
    amigos: ["Savio", "Iuri", "Gustavo", "Naiara"]
  }
];

// 20 - Mostre no console o nome de um amigo de cada lista.

// console.log(cadastro);
console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);

console.log(cadastro.amigos[0]);
