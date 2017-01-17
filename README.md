# Basic tooling boilerplate
This is a boilerplate for implementing some basic tooling. Currently included is
- Watchify
- Babel
- Uglify

## How to use
> npm run app

Looks for changes in js files under src/scripts/watchfolder and transform them on the fly using babel and watchify and moves them to public/scripts/ using the same filename 

> npm run uglify

Uglifies the scripts in public/scripts/

TODO: Implement a testing framework
