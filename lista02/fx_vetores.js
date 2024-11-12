function dobraVetor(X) {
    let Y = [];

    for(let i = 0; i < X.length; i++) {
        Y[i] = X[i] * 2;
    }
    return Y;
}

function somaVetor(X, dobro) {
    let Y = dobro(X);
    let Z = [];
    for(let i = 0; i < X.length; i++) {
        Z[i] = X[i] + Y[i];
    }
    return Z;
}

export default {dobraVetor, somaVetor}