// IMPORT PACKAGES
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// IMPORT COMPONENTS
import Container from '../components/Container';

// STYLES
const Title = styled.h1`
  margin: 0;
  font-family: var(--family);
  font-size: var(--textXXL);
  font-weight: 800;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};

  @media screen and (max-width: 475px) {
    font-size: var(--textXL);
  }
`;

const Description = styled.p`
  margin: 0;
  padding: 30px 0 7px;
  font-family: var(--family);
  font-size: var(--textM);
  font-weight: 300;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};

  @media screen and (max-width: 475px) {
    padding-top: 20px;
    font-size: var(--textS);
  }
`;

const HomeLink = styled(Link)`
  border: 1px solid transparent;
  outline: none;
  font-family: var(--family);
  font-size: var(--textM);
  font-weight: 600;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  transition: opacity 0.6s;

  &:hover {
    opacity: 0.6;
  }

  &:focus-visible {
    border-color: var(--color-active);
  }

  @media screen and (max-width: 475px) {
    font-size: var(--textS);
  }
`;

function NotFound() {
  return (
    <Container $notFound>
      <Title>404 - Page Not Found</Title>
      <Description>
        Sorry, the page you are looking for could not be found.
      </Description>
      <HomeLink to='/'>Go back to the main page</HomeLink>
    </Container>
  );
}

export default NotFound;
