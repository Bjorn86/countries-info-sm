// IMPORT PACKAGES
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { v4 as uuidv4 } from 'uuid';

// IMPORT COMPONENTS
import CountryLink from '../../UI/CountryLink/CountryLink';

// IMPORT SELECTORS
import { useNeighbors } from './useNeighbors';

// STYLES
const Article = styled.article`
  max-width: 100%;
  padding-top: 78px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 25px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    padding-top: 64px;
  }
`;

const Flag = styled.img`
  max-width: 560px;
  min-width: 465px;
  object-fit: contain;
  font-family: var(--family);
  font-size: var(--textM);
  font-weight: 600;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};

  @media screen and (max-width: 1100px) {
    max-width: 65%;
    min-width: 273px;
  }
`;

const DescriptionWrapper = styled.div`
  max-width: 600px;
  min-width: 450px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1100px) {
    max-width: 100%;
    min-width: 273px;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 42px;
  font-family: var(--family);
  font-size: var(--textXXL);
  font-weight: 800;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};

  @media screen and (max-width: 800px) {
    padding-top: 20px;
  }

  @media screen and (max-width: 475px) {
    font-size: var(--textXL);
  }
`;

const ListWrapper = styled.div`
  padding-top: 33px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 475px) {
    padding-top: 25px;
    flex-direction: column;
  }
`;

const DescriptionList = styled.ul`
  width: 252px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0;
  padding-left: 0;
  list-style: none;
  ${(props) => props.$left && 'padding-right: 10px;'}

  @media screen and (max-width: 475px) {
    width: 100%;
    ${(props) => props.$left && 'padding-right: 0;'}
    ${(props) => props.$bottom && 'padding-top: 34px;'}
  }
`;

const ListItem = styled.li`
  padding-bottom: 13px;
  margin: 0;
  font-family: var(--family);
  font-size: var(--textM);
  font-weight: 300;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
  ${(props) => props.$bottom && 'padding-bottom: 0;'}

  @media screen and (max-width: 475px) {
    padding-bottom: 15px;
    font-size: var(--textS);
  }
`;

const InfoAccent = styled.span`
  font-family: var(--family);
  font-size: var(--textM);
  font-weight: 600;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};

  @media screen and (max-width: 475px) {
    font-size: var(--textS);
  }
`;

const BordersWrapper = styled.div`
  padding-top: 54px;
  display: flex;
  align-items: baseline;
  gap: 10px;

  @media screen and (max-width: 475px) {
    padding-top: 27px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const BordersInfo = styled.p`
  min-width: 131px;
  margin: 0;
  font-family: var(--family);
  font-size: var(--textM);
  font-weight: 600;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
`;

const LinksWrapper = styled.div`
  max-width: 458px;
  display: flex;
  flex-wrap: wrap;
`;

function Details({
  name,
  flags,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  borders,
}) {
  // HOOKS
  const neighbors = useNeighbors(borders);

  // HANDLE LANGUAGES RENDER
  const handleLanguages = () =>
    Object.keys(languages).length !== 0
      ? Object.values(languages).join(', ')
      : 'the country does not have an official language';

  // HANDLE CURRENCIES RENDER
  const handleCurrencies = () => {
    if (Object.keys(currencies).length !== 0) {
      const currenciesArr = Object.keys(currencies).map(
        (currencyKey) => currencies[currencyKey].name,
      );
      return currenciesArr.join(', ');
    }
    return 'the country does not have an official currency';
  };

  // HANDLE NAME RENDER
  const handleName = () => {
    if ('nativeName' in name) {
      return Object.values(name.nativeName)[0]?.common;
    }
    return name.common;
  };

  // HANDLE NEIGHBORS RENDER
  const handleNeighbors = () => {
    if (neighbors.length) {
      return neighbors.map((country) => (
        <CountryLink
          key={uuidv4()}
          to={`/country/${country.cca3.toLowerCase()}`}
        >
          {country.name.common}
        </CountryLink>
      ));
    }
    return (
      <ListItem as='p' $bottom>
        the country has no land borders
      </ListItem>
    );
  };

  return (
    <>
      <Helmet>
        <meta
          name='description'
          content={`${name.common} - country information`}
        />
        <meta
          name='keywords'
          content={`${name.common}, information, capital, currency, language, population, guide`}
        />
        <title>{`Countries Info - ${name.common}`}</title>
      </Helmet>
      <Article>
        <Flag src={flags.svg} alt={flags.alt || `The flag of ${name.common}`} />
        <DescriptionWrapper>
          <Title>{name.common}</Title>
          <ListWrapper>
            <DescriptionList $left>
              <ListItem>
                <InfoAccent>Native Name: </InfoAccent>
                {handleName()}
              </ListItem>
              <ListItem>
                <InfoAccent>Population: </InfoAccent>
                {new Intl.NumberFormat().format(population)}
              </ListItem>
              <ListItem>
                <InfoAccent>Region: </InfoAccent>
                {region}
              </ListItem>
              <ListItem>
                <InfoAccent>Sub Region: </InfoAccent>
                {subregion || 'the country does not have a subregion'}
              </ListItem>
              <ListItem>
                <InfoAccent>Capital: </InfoAccent>
                {capital.join(', ') || 'the country has no capital'}
              </ListItem>
            </DescriptionList>
            <DescriptionList $bottom>
              <ListItem>
                <InfoAccent>Top Level Domain: </InfoAccent>
                {tld.join(', ') || 'the country has no top level domain'}
              </ListItem>
              <ListItem>
                <InfoAccent>Currencies: </InfoAccent>
                {handleCurrencies()}
              </ListItem>
              <ListItem>
                <InfoAccent>Languages: </InfoAccent>
                {handleLanguages()}
              </ListItem>
            </DescriptionList>
          </ListWrapper>
          <BordersWrapper>
            <BordersInfo>Border Countries:</BordersInfo>
            <LinksWrapper>{handleNeighbors()}</LinksWrapper>
          </BordersWrapper>
        </DescriptionWrapper>
      </Article>
    </>
  );
}

export default Details;

Details.propTypes = {
  name: PropTypes.shape({
    common: PropTypes.string,
    nativeName: PropTypes.shape({}),
  }).isRequired,
  flags: PropTypes.shape({
    svg: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string,
  capital: PropTypes.arrayOf(PropTypes.string),
  tld: PropTypes.arrayOf(PropTypes.string),
  currencies: PropTypes.shape({}),
  languages: PropTypes.shape({}),
  borders: PropTypes.arrayOf(PropTypes.string),
};

Details.defaultProps = {
  subregion: '',
  capital: [],
  tld: [],
  currencies: {},
  languages: {},
  borders: [],
};
