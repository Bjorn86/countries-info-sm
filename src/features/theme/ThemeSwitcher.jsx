// IMPORT PACKAGES
import styled from 'styled-components';

// IMPORT HOOKS
import { useTheme } from './useTheme';

// IMPORT IMAGES
import moon from '../../assets/icons/moon.svg';
import moonFilled from '../../assets/icons/moon-filled.svg';

// STYLES
const Button = styled.button`
  width: 112px;
  height: 24px;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  background:
    url(${(props) => (props.theme.themeName === 'light' ? moon : moonFilled)})
      3px center/18px no-repeat,
    transparent;
  font-family: var(--family);
  font-size: var(--textM);
  font-weight: 600;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
  text-align: right;
  transition: opacity 0.6s;
  &:hover {
    opacity: 0.6;
  }
  &:focus-visible {
    border-color: var(--color-active);
  }

  @media screen and (max-width: 475px) {
    width: 87px;
    background-size: 16px;
    font-size: var(--textXS);
  }
`;

// THEME SWITCHER COMPONENT
function ThemeSwitcher() {
  // HOOKS
  const [theme, toggleTheme] = useTheme();

  return (
    <Button type='button' onClick={toggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
}

export default ThemeSwitcher;
