import Preloader from './Preloader';

export default {
  title: 'UI/Preloader',
  component: Preloader,
  tags: ['autodocs'],
};

const Template = (args) => (
  <div style={{ height: '300px' }}>
    <Preloader {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
