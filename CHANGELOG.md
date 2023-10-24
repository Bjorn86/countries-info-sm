# `package.json`

## Изменение конфига ESLint

Поскольку RTK использует `immer` и требует мутабельного изменения данных в том числе и параметров приходящих в функцию, а конфиг Airbnb для ESLint содержит правило `no-param-reassign` это приводит к ошибке линтера. В соответствии с [документацией RTK](https://redux-toolkit.js.org/usage/immer-reducers#linting-state-mutations) было добавлено исключение в конфиг ESLint:

```json
"overrides": [
  {
    "files": [
      "src/features/**/*Slice.js"
    ],
    "rules": {
      "no-param-reassign": [
        "error",
        {
          "props": false
        }
      ]
    }
  }
]
```
