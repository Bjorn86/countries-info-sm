// IMPORT PACKAGES
import styled from 'styled-components';
import PropTypes from 'prop-types';

// STYLES
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`;

const Flag = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  font-family: var(--family);
  font-size: var(--textS);
  font-weight: 300;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
`;

const DescriptionWrapper = styled.div`
  padding: 27px 22px 34px;
  background-color: ${(props) => props.theme.colorUiBase};
`;

const CountryName = styled.h2`
  margin: 0 0 18px;
  font-family: var(--family);
  font-size: var(--textL);
  font-weight: 800;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin: 0 0 8px;
  font-family: var(--family);
  font-size: var(--textS);
  font-weight: 300;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Accent = styled.span`
  font-family: var(--family);
  font-size: var(--textS);
  font-weight: 600;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
`;

// CARD COMPONENT
function Card({ flags, name, population, region, capital }) {
  return (
    <CardWrapper>
      <Flag src={flags.svg} alt={flags.alt || `The flag of ${name.common}}`} />
      <DescriptionWrapper>
        <CountryName>{name.common}</CountryName>
        <List>
          <ListItem>
            <Accent>Population:</Accent>{' '}
            {new Intl.NumberFormat().format(population)}
          </ListItem>
          <ListItem>
            <Accent>Region:</Accent> {region}
          </ListItem>
          <ListItem>
            <Accent>Capital:</Accent>{' '}
            {capital.join(', ') || 'there is no capital'}
          </ListItem>
        </List>
      </DescriptionWrapper>
    </CardWrapper>
  );
}

export default Card;

Card.propTypes = {
  flags: PropTypes.shape({
    svg: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  name: PropTypes.shape({
    common: PropTypes.string,
  }).isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.arrayOf(PropTypes.string).isRequired,
};
