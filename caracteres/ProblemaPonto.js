const texto = 'Bom\ndia'

console.log(texto.match(/./gi))
console.log(texto.match(/.../gi))
console.log(texto.match(/..../gi)) // o ponto não engloba o \n

// dot all - algumas linguagens tem uma flag /regex/s, mas JS não!