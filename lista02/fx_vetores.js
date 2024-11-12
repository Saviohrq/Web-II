function dobraVetor(x) {
    var y = Array(x.length);

    for(let i = 0; i < x.length; i++) {
        y[i] = 2 * x[i];
    }
    return y;
}

function somaVetor(x, dobro) {
    for(let i = 0; i < x.length; i++) {
        x[i] += dobro[i];
    }
    return x;
}

export default {dobraVetor, somaVetor}