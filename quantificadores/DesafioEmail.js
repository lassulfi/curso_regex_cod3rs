const texto = `
Os e-mails dos convidados são:
    - fulano@cod3rs.com.br 
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com`

// Minha solução
const regexEmail = /[A-Za-z0-9\._]+@[A-Za-z0-9]+\.\w+\.?\w{0,}/g
console.log(texto.match(regexEmail))

// Solucao COD3RS
console.log(texto.match(/[a-zA-z0-9_]+@[a-zA-z0-9_]+\.[a-zA-z0-9_]{2,4}/g))
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))

// no futuro
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{0,2})?/g))