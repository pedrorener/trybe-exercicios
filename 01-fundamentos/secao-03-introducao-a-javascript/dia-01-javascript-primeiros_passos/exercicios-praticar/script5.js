// 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const a = 80;
const b = 75;
const c = -25;

let somaAngulos = a + b + c;
let positivoAngulos = a > 0 && b > 0 && c > 0;

if (positivoAngulos) {
  if (somaAngulos === 180) {
    console.log('Triângulo valido');
  } else {
    console.log('Triângulo invalido');
  }
} else {
  console.log('Triângulo invalido');
}
