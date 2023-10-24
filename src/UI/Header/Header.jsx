// IMPORT PACKAGES
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// IMPORT COMPONENTS
import ThemeSwitcher from '../../features/theme/ThemeSwitcher';

// IMPORT ACTIONS
import { clearControls } from '../../store/controls/controlsActions';

// STYLES
const HeaderElement = styled.header`
  max-width: 100%;
  flex: 0 1 auto;
  background-color: ${(props) => props.theme.colorUiBase};
  position: relative;
  box-shadow: ${(props) => props.theme.shadow};
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

  @media screen and (max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 475px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-family: var(--family);
  font-size: var(--textXL);
  font-weight: 800;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};

  @media screen and (max-width: 800px) {
    font-size: var(--textL);
  }

  @media screen and (max-width: 475px) {
    font-size: var(--textS);
  }
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

// HEADER COMPONENT
function Header() {
  // HOOKS
  const dispatch = useDispatch();

  // HANDLER CLEAR CONTROLS
  const handleClearControls = () => {
    dispatch(clearControls());
  };

  return (
    <HeaderElement>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Title>Where in the world?</Title>} />
          <Route
            path='*'
            element={
              <HeaderLink to='/' onClick={handleClearControls}>
                <Title as='h2'>Where in the world?</Title>
              </HeaderLink>
            }
          />
        </Routes>
        <ThemeSwitcher />
      </Wrapper>
    </HeaderElement>
  );
}

export default Header;
