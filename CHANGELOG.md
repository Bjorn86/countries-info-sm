# Изменения

## Storybook

### `main.js`

- удалён модуль `@storybook/addon-onboarding`
- добавлен модуль `storybook-addon-react-router-v6`
- добавлен модуль `@storybook/addon-styling`

### `preview.js`

Для работы с глобальными стилями добавлено:

```js
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import GlobalStyles from '../src/styles/GlobalStyles';

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];
```
