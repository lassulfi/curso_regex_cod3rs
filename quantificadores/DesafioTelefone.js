const texto = `
Lista telefônica:
    - (11) 98756-1212
    - 98765-4321
    - (85) 99988-7766
    - (21)3261-8899`

// Minha solução
const regexTelefone = /(\([0-9]{2}\))?\s?[0-9]+?-[0-9]{4}/g
console.log(texto.match(regexTelefone))

// Solução COD3RS
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))