// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorLetra = array[0];
let menorLetra = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorLetra.length) {
    maiorLetra = array[index];
  }
}
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menorLetra.length) {
    menorLetra = array[index];
  }
}

console.log(maiorLetra);
console.log(menorLetra);
