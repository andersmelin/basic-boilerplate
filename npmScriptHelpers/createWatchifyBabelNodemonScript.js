'use strict'

const fs = require('fs')
const watchfolder = './src/scripts/watchfolder/'
const targetfolder = './public/scripts/'
const files = fs.readdirSync(watchfolder)
    .filter(file => file.endsWith('.js'))

let packageJson = fs.readFileSync('./package.json', "utf8")
packageJson = JSON.parse(packageJson)

const createNpmScript = () => {
    let strings = []
    files.forEach(filename => {
        strings.push(`watchify ${watchfolder}${filename} --debug -o ${targetfolder}${filename}` )
        strings.push(`babel ${targetfolder}${filename} --watch --out-file ${targetfolder}${filename}` )
    })
    strings.push(`nodemon app.js` )
    
    return strings.join(' | ')
}

packageJson.scripts.watchifyBabelNodemon = createNpmScript()

packageJson = JSON.stringify(packageJson, null, 2)
fs.writeFileSync('./package.json', packageJson)
