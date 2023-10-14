import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Button text',
    },
    onClick: {
      description: 'Button click handler',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Back',
  onClick: () => {},
};
