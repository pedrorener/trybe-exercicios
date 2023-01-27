//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.

const num1 = 0;
const num2 = 0;

// adição
function adicao(num1, num2) {
  let caulcule = num1 + num2;
  return caulcule;
}

// subtração
function subtracao(num1, num2) {
  let caulcule = num1 - num2;
  return caulcule;
}

// divisão
function divisao(num1, num2) {
  let caulcule = num1 / num2;
  return caulcule;
}

// módulo
function modulo(num1, num2) {
  let caulcule = num1 % num2;
  return caulcule;
}

console.log(adicao(10, 20));
console.log(subtracao(10, 20));
console.log(divisao(50, 2));
console.log(modulo(45, 2)); //44 sobra 1

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const n1 = 0;
const n2 = 0;

function comparacao(n1, n2) {
  if (n1 > n2) {
    return console.log(n1 + '', 'é maior que' + '', n2);
  } else {
    return console.log(n2 + '', 'é maior que' + '', n1);
  }
}

console.log(comparacao(50, 25));

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function programa(number) {
  if (number > 0) {
    return 'positive';
  } else if (number < 0) {
    return 'Negative';
  } else {
    return 'Zero';
  }
}

console.log(programa(0));

//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// * Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// * Um ângulo será considerado inválido se não tiver um valor positivo.

function angSoma(ang1, ang2, ang3) {
  if (ang1 + ang2 + ang3 === 180) {
    return 'True';
  } else {
    return 'false';
  }
}

console.log(angSoma(100, 50, 30));
