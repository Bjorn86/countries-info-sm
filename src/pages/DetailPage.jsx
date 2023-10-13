// IMPORT PACKAGES
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
/* import { v4 as uuidv4 } from 'uuid'; */

// IMPORT COMPONENTS
import Container from '../components/Container';

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

function DetailPage() {
  return (
    <Container $detail>
      <Helmet>
        <meta name='description' content={`${1} - country information`} />
        <meta
          name='keywords'
          content={`${1}, information, capital, currency, language, population, guide`}
        />
        <title>{`Countries Info - ${1}`}</title>
      </Helmet>
      {/* TODO Заглушка кнопки вместо UI */}
      <button type='button'>Back</button>
      <Article>
        <Flag src={1} alt={1 || `The flag of ${1}`} />
        <DescriptionWrapper>
          <Title>{1}</Title>
          <ListWrapper>
            <DescriptionList $left>
              <ListItem>
                <InfoAccent>Native Name:</InfoAccent> {1}
              </ListItem>
              <ListItem>
                <InfoAccent>Population:</InfoAccent> {1}
              </ListItem>
              <ListItem>
                <InfoAccent>Region:</InfoAccent> {1}
              </ListItem>
              <ListItem>
                <InfoAccent>Sub Region:</InfoAccent> {1}
              </ListItem>
              <ListItem>
                <InfoAccent>Capital:</InfoAccent> {1}
              </ListItem>
            </DescriptionList>
            <DescriptionList $bottom>
              <ListItem>
                <InfoAccent>Top Level Domain:</InfoAccent> {1}
              </ListItem>
              <ListItem>
                <InfoAccent>Currencies:</InfoAccent> {1}
              </ListItem>
              <ListItem>
                <InfoAccent>Languages:</InfoAccent> {1}
              </ListItem>
            </DescriptionList>
          </ListWrapper>
        </DescriptionWrapper>
        <BordersWrapper>
          <BordersInfo>Border Countries:</BordersInfo>
          <LinksWrapper>{1}</LinksWrapper>
        </BordersWrapper>
      </Article>
    </Container>
  );
}

export default DetailPage;
