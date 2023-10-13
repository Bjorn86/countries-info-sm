import { withRouter } from 'storybook-addon-react-router-v6';

import CountryLink from './CountryLink';

export default {
  title: 'UI/Country link',
  component: CountryLink,
  tags: ['autodocs'],
  decorators: [withRouter],
  argTypes: {
    text: {
      description: 'Link text',
    },
  },
};

const Template = (args) => <CountryLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Russia',
};
