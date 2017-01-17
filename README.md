# Basic tooling boilerplate
This is a boilerplate for implementing some basic tooling. Currently included is
- Watchify
- Babel
- Uglify

## How to use
> npm install

Install all dependencies

> npm start

Looks for changes in js files under src/scripts/watchfolder and transform them on the fly using babel and watchify and moves them to public/scripts/ using the same filename 

> npm run uglify

Uglifies the scripts in public/scripts/

> .env  
**store all env vars in the .env file located in the root folder like:**  
DB_USERNAME=yourName  
DB_PASSWORD=yourPassword  
**Access from node by by:**  
process.env.DB_USERNAME  
process.env.DB_PAssword

Environment variables

TODO: Implement a testing framework  
