'use strict'

const fs = require('fs')
const watchfolder = './src/scripts/watchfolder/'
const targetfolder = './public/scripts/'

const filesInWatchfolder = fs.readdirSync(watchfolder)
    .filter(file => file.endsWith('.js'))

const filesToUglify = fs.readdirSync(targetfolder)
    .filter(file => filesInWatchfolder.includes(file))

let packageJson = fs.readFileSync('./package.json', "utf8")
packageJson = JSON.parse(packageJson)

const createNpmScript = () => {
    return filesToUglify.map(filename => `uglifyjs ${targetfolder}${filename} --debug --mangle --compress -o ${targetfolder}${filename}`).join(' | ')
}

packageJson.scripts.uglifyThese = createNpmScript()

packageJson = JSON.stringify(packageJson, null, 2)
fs.writeFileSync('./package.json', packageJson)
