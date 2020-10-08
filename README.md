# Xlit - Transliteration UI

Contains Transliteration Editor (forked from [Varnam Project](https://github.com/varnamproject/varnamproject.com/))

## Hosting UI

### Building static files
1. `npm install`
2. `npm run build` (will be built in `docs` folder)

### Serving locally
1. `npm run start`

### Serving on GCP App Engine
1. `gcloud app deploy app.yaml`
2. Optional: `gcloud app deploy dispatch.yaml` (To [link domain](https://stackoverflow.com/a/56619600))

## Hosting API

- [API Format](/docs/api-format.md)
