
.js-files residing here will be browserified and babelified and copied over to public/scripts


If the npm script "npm run uglify" are executed the files in "public/scripts/" will be uglified BUT ONLY IF they have a mother file here

Currently the startup script cannot handle zero js-files. Keep at least one js file in the watchfolder (even a blank dummyfile works)

Restart the server manually after creating or removing files in the watchfolder
