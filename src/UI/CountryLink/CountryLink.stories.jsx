import { withRouter } from 'storybook-addon-react-router-v6';

import CountryLink from './CountryLink';

export default {
  title: 'UI/Country link',
  component: CountryLink,
  tags: ['autodocs'],
  decorators: [withRouter],
  argTypes: {
    children: {
      description: 'Link text',
    },
    to: {
      description: 'Link href',
    },
  },
};

const Template = (args) => <CountryLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Russia',
  to: '/country/rus',
};
