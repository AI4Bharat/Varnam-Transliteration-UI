# Xlit - Transliteration UI

Contains Transliteration Editor (forked from [Varnam Project](https://github.com/varnamproject/varnamproject.com/))

## Hosting UI

### Building static files
1. `npm install`
2. `npm run build` (will be built in `public` folder)

### Serving locally
1. `npm run start`

### Serving on GCP App Engine
1. `gcloud app deploy app.yaml`
2. Optional: `gcloud app deploy dispatch.yaml` (To [link domain](https://stackoverflow.com/a/56619600))

### Serving on GitHub Pages

#### One-time setup
1. `cd public`
2. `git init` and `git checkout -b gh-pages`
3. `git remote add origin https://github.com/AI4Bharat-IndicNLP/Transliteration-UI.git` (Replace your repo if forked)
4. `git add . && git commit -m "Initial Deploy"`
6. `git push --force --set-upstream origin gh-pages`

#### Deploying regularly
0. Ensure static files are rebuilt and `cd public`
1. `git add . && git commit -m "Deploy <date>"`
2. `git push`

## Hosting API

- [API Format](/docs/api-format.md)
