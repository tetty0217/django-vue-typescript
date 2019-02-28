# django-vue-typescript
## Project setup
### Django setup
```
pyenv local 3.7.2
pip install virtualenv
virtualenv env
. env/bin/activate

pip install -r requirements.txt
```

### Vue setup
```
brew install nodenv
nodenv install 11.4.0
nodenv local 11.4.0
npm i -g yarn
yarn
```

### Compiles and hot-reloads for development
```
yarn run dev
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
