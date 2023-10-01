// IMPORT PACKAGES
/* import {useEffect} from 'react'; */
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

// IMPORT IMAGES
import moon from '../../assets/icons/moon.svg';

// STYLES
const HeaderElement = styled.header`
  max-width: 100%;
  flex: 0 1 auto;
  background-color: ${(props) => props.theme.backgroundColor};
  position: relative;
  box-shadow: var(--shadow);
`;

const Wrapper = styled.div`
  max-width: 1440px;
  box-sizing: border-box;
  padding: 0 80px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-family: var(--family);
  font-size: var(--textXL);
  font-weight: 800;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  transition: 0.6s;
  border: 1px solid transparent;
  outline: none;
  &:hover {
    opacity: 0.6;
  }
  &:focus-visible {
    border-color: var(--color-active);
  }
`;

const Button = styled.button`
  width: 112px;
  height: 24px;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  background:
    url(${moon}) 3px center/18px no-repeat,
    transparent;
  font-family: var(--family);
  font-size: var(--textM);
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
  text-align: right;
  transition: opacity 0.6s;
  &:hover {
    opacity: 0.6;
  }
  &:focus-visible {
    border-color: var(--color-active);
  }
`;

// HEADER COMPONENT
function Header() {
  return (
    <HeaderElement>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Title>Where in the world?</Title>} />
          <Route
            path=':countryCode'
            element={
              <HeaderLink to='/'>
                <Title as='h2'>Where in the world?</Title>
              </HeaderLink>
            }
          />
        </Routes>
        <Button type='button'>Dark Mode</Button>
      </Wrapper>
    </HeaderElement>
  );
}

export default Header;
