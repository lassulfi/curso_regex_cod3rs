const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a thick fog in NYC'

// * -> zero ou mais
const regex = /fogo*/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

// *? -> zero ou menos (não guloso)
const regex2 = /fogo*?/gi
console.log(texto1.match(regex2))
console.log(texto2.match(regex2))