const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ inicio da linha ou string
console.log(texto.match(/r$/gi)) // $ fim da linha ou string
console.log(texto.match(/^r.*r$/gi)) // problema do dot all