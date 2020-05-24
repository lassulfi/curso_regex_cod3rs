// no início...
// Um byte (8 bits) - 256 caracteres
// Símbolos, alguns caracteres de pontuação, A-Z, a-z, 0-9

// posteriormente
// Dois bytes (16 bits) - 65500+ caracteres
// +Símbolos, +Pontuação, A-Z, a-z, 0-9

// Unicode
// Quantidade de bytes variável - expansível
// Suporta mais de 1 Milhão de caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos
// https://unicode-table.com/pt

const texto = 'aʬc௵d'

console.log(texto.match(/\u02AC|\u0BF5/g))
