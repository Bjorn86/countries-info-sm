import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../src/store/rootReducer';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/GlobalStyles';
import { lightTheme, darkTheme } from '../src/styles/themes';

import '../src/index.css';

const store = createStore(rootReducer);

const withReduxProvider = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

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

export default preview;
