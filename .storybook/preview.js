import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import GlobalStyles from '../src/styles/GlobalStyles';

import '../src/index.css';

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];

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

export default preview;
