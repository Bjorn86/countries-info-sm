# Изменения

## Storybook

### `main.js`

- удалён модуль `@storybook/addon-onboarding`
- добавлен модуль `storybook-addon-react-router-v6`
- добавлен модуль `@storybook/addon-styling`

### `preview.js`

Для работы с глобальными стилями и темами, добавлено:

```js
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/GlobalStyles';
import { lightTheme, darkTheme } from '../src/styles/themes';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyles,
  }),
  withReduxProvider,
];
```

Для работы с Redux добавлено:

```js
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../src/store/rootReducer';

const withReduxProvider = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);
```
