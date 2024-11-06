function calculo_neuronio(x, ativacao) {
    var W = treinamento(x.length)
    var v = 0
    for(let i=0;i<x.length;i++) {
        v += (X[i] * W[i])
    }
    var f = ativacao(v)
    return f
}

function treinamento(n) {
    var W = []
    for(let i=0;i<n;i++) {
        W.push(Math.random())
    }
    return W
}

export default calculo_neuronio