import ControlsSearch from './ControlsSearch';

export default {
  title: 'Features/Controls search',
  component: ControlsSearch,
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

const Template = (args) => <ControlsSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
  formId: 'search',
  placeholder: 'Search for a country...',
};
