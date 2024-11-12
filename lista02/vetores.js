import fx from "./fx_vetores.js"

let vetor = [4, 6, 10, 9, 4];

let resultado = fx.somaVetor(vetor, fx.dobraVetor);

console.log(resultado);
console.log(fx.dobraVetor(vetor));
console.log(fx.somaVetor(vetor, fx.dobraVetor));