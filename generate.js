const fs = require('fs')
const Mustache = require('mustache')
const event = require('./data/event.json')
const ncp = require('ncp').ncp
const dir = `${__dirname}/out`

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
}

ncp(`${__dirname}/static`, dir, err => {
    if(err) {
        console.error(err)
    }
})

fs.writeFileSync(
    `${__dirname}/out/index.html`,
    Mustache.render(fs.readFileSync('index.html').toString(), {
        event 
    })
)