// IMPORT PACKAGES
import styled from 'styled-components';
import PropTypes from 'prop-types';

// IMPORT IMAGES
import back from '../../assets/icons/arrow-left-long.svg';
import backFilled from '../../assets/icons/arrow-left-long-filled.svg';

// STYLES
const ButtonElement = styled.button`
  width: 135px;
  height: 42px;
  padding: 0 0 0 22px;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background:
    url(${(props) => (props.theme.themeName === 'light' ? back : backFilled)})
      32px center/18px no-repeat,
    ${(props) => props.theme.colorUiBase};
  box-shadow: ${(props) => props.theme.shadow};
  font-family: var(--family);
  font-size: var(--textM);
  font-weight: 600;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  transition: opacity 0.6s;

  &:hover {
    opacity: 0.6;
  }

  &:focus-visible {
    border-color: var(--color-active);
  }

  @media screen and (max-width: 475px) {
    height: 32px;
    width: 104px;
    padding-left: 25px;
    background-size: 16px;
    background-position: 24px center;
    font-size: var(--textS);
  }
`;

function Button({ children, onClick }) {
  return <ButtonElement onClick={onClick}>{children}</ButtonElement>;
}

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
