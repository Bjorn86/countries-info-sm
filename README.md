# Template-проекта на Create React App

## Оглавление

- [Дополнительные модули](#дополнительные-модули)
- [Сценарии запуска](#сценарии-запуска)
- [Автор](#автор)

## Дополнительные модули

- Стили
  - [`sass`](https://www.npmjs.com/package/sass) - модуль препроцессора Sass\Scss
- Линтер
  - [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) - модуль с пресетом плагинов и настроек AirBnb (установлен командой `npx install-peerdeps --dev eslint-config-airbnb` поэтому также содержит и другие модули зависимости необходимые для работы)
  - [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) модуль для игнорирования некоторых правил которые конфликтуют с Prettier
- Менеджеры Git hooks
  - [`husky`](https://typicode.github.io/husky/) - менеджер Git hooks
  - [`lint-staged`](https://www.npmjs.com/package/lint-staged) - модуль запускающий сценарии проверки по файлам подготовленным к коммиту
- Работа с коммитами
  - [`commitizen`](https://www.npmjs.com/package/commitizen) - модуль позволяющий записывать информацию о коммитах по определённому шаблону
  - [`cz-conventional-changelog`](https://www.npmjs.com/package/cz-conventional-changelog) - модуль расширяющий шаблон `commitizen` по стандарту [conventional changelog](https://github.com/conventional-changelog/conventional-changelog)
- Форматирование кода
  - [`prettier`](https://prettier.io/) - модуль для форматирования кода
- Документирование
  - [`storybook`](https://storybook.js.org/) - среда для документирования и разработки элементов интерфейса (установлен командой `npx storybook@latest init` поэтому также содержит и другие модули зависимости необходимые для работы)
- Прочие
  - [`clsx`](https://www.npmjs.com/package/clsx) - модуль для удобного именования классов
  - [`prop-types`](https://www.npmjs.com/package/prop-types) - модуль для типизации пропсов

## Сценарии запуска

- `npm start` - режим разработки с запуском локального сервера
- `npm run build` - режим сборки проекта в продакшн
- `npm run test` - запуск в режиме тестирования
- `npm run eject` - режим извлечения конфигов CRA
- `npm run lint` - запускает линтер
- `npm run lint:fix` - запускает линтер, в режиме устранения мелких замечаний
- `npm run format` - запуск форматера кода
- `npm run prepare` - подготавливает Husky к работе, запускается единожды при старте проекта
- `npm run commit` - запускает commitizen для коммита
- `npm run storybook` - запускает Storybook в режиме разработки
- `npm run build-storybook` - запускает Storybook в режиме продакшн

## Автор

**Данила Легкобытов**

- e-mail: [legkobytov-danila@yandex.ru](mailto:legkobytov-danila@yandex.ru)
- LinkedIn: [in/danila-legkobytov](https://www.linkedin.com/in/danila-legkobytov/)
- Telegram: [@danila_legkobytov](https://t.me/danila_legkobytov)
- Frontend Mentor: [@danila_legkobytov](https://www.frontendmentor.io/profile/Bjorn86)
