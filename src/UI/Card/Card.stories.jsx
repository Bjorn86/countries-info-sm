import Card from './Card';

export default {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    flags: {
      description: 'Object with flag image and alt text',
    },
    name: {
      description: 'Object with common name of the country',
    },
    population: {
      description: 'Population of the country',
    },
    region: {
      description: 'Region of the country',
    },
    capital: {
      description: 'Array with capitals of the country',
    },
  },
};

const Template = (args) => (
  <div
    style={{
      width: '264px',
      'border-radius': '5px',
      'box-shadow': '0px 0px 5px hsla(0, 0%, 0%, 0.2)',
    }}
  >
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  flags: {
    svg: 'https://flagcdn.com/br.svg',
    alt: 'Brazil',
  },
  name: {
    common: 'Brazil',
  },
  population: 212559409,
  region: 'South America',
  capital: ['Brasília'],
};
