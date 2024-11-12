import fx from "./fx_vetores.js"

var vetor = [4, 6, 10, 9, 4];

console.log(vetor);
console.log(fx.dobraVetor(vetor));
console.log(fx.somaVetor(vetor, fx.dobraVetor(vetor)));