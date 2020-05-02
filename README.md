# Indic Transliteration UI

Contains Transliteration Editor (forked from [Varnam Project](https://github.com/varnamproject/varnamproject.com/))

## Hosting

### Serving locally
1. `npm install`
2. `npm run start`

### Serving on GCP App Engine
1. `gcloud app deploy app.yaml`
2. Optional: `gcloud app deploy dispatch.yaml` (To [link domain](https://stackoverflow.com/a/56619600))

<hr/>

## Original Instructions

Files for www.varnamproject.com

### Running
* Install dependencies using `node install`
* Run server using `node server.js`
* You may need to compile the Varnam module yourself. Otherwise you may see errors like the following: `Error: dlopen(/Users/sdqali/src/play/varnamproject.com/node_modules/varnam.node, 1): no suitable image found.  Did find:`
`	/Users/sdqali/src/play/varnamproject.com/node_modules/varnam.node: unknown file type, first eight bytes: 0x7F 0x45 0x4C 0x46 0x02 0x01 0x01 0x00`
* To compile Varnam module, grab `https://github.com/navaneeth/libvarnam-nodejs` and build
* Copy `<libvarnam-nodejs>/build/Release/varnam.node` to `./node_modules`
