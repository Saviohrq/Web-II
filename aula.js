function equacao(a, b, operacao) {
    let r = a + b * operacao(a, b)
    return r
}

let x = equacao(5, 6, (x, y) => {
    return x + (y * y)
})