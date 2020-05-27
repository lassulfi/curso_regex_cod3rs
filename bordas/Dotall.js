const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/^r.*r$/gi)) // problema do dot all
console.log(texto.match(/^r[\s\S]*r$/gi))