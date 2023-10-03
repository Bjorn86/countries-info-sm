import Search from './Search';

export default {
  title: 'UI/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    formId: {
      description: 'Form ID',
    },
    placeholder: {
      description: 'Placeholder text',
    },
  },
};

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  formId: 'search',
  placeholder: 'Search for a country...',
};
