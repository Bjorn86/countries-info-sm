import {
  withRouter,
  reactRouterParameters,
} from 'storybook-addon-react-router-v6';

import Header from './Header';

export default {
  title: 'UI/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [withRouter],
};

export const FromDetailPage = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { countryCode: 'abc' },
      },
      routing: {
        path: ':countryCode',
      },
    }),
  },
};

const Template = (args) => <Header {...args} />;

export const LightTheme = Template.bind({});
LightTheme.args = {};
