const fs = require('fs')

const read = fileName =>
    fs.readFileSync(`${__dirname}/originais/${fileName}`, { encoding: 'utf-8' })

const write = (fileName, content) => {
    const dirname = `${__dirname}/alterados`
    if(!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname)
    }

    fs.writeFileSync(`${dirname}/${fileName}`, content, { encoding: 'utf-8' })
}

module.exports = { read, write }