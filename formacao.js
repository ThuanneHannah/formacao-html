var vitorias = 110
var derrotas = 5

function soma(valor1,valor2){
    return valor1 - valor2
}

let resultado = soma(vitorias,derrotas)

console.log (resultado)


 if (resultado < 10) {
     console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível Ferro");
 } else if (resultado >= 11 && resultado <= 20) {
     console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível Bronze");
 } else if (resultado >= 21 && resultado <= 50) {
     console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível Prata");
 } else if (resultado >= 51 && resultado <= 80) {
     console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível Ouro");
 } else if (resultado >= 81 && resultado <= 90) {
     console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível Diamante");
 } else if (resultado >= 91 && resultado <= 100) {
     console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível Lendário");
 } else {
     console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível Imortal");
 }





