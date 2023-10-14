import { withRouter } from 'storybook-addon-react-router-v6';

import Header from './Header';

export default {
  title: 'UI/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [withRouter],
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
