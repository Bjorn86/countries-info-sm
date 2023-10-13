// IMPORT PACKAGES
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// STYLES
const BorderLink = styled(Link)`
  margin-top: 6px;
  margin-right: 10px;
  padding: 5px 8px;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background-color: ${(props) => props.theme.colorUiBase};
  box-shadow: ${(props) => props.theme.shadow};
  font-family: var(--family);
  font-size: var(--textS);
  font-weight: 300;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.6s;

  &:hover {
    opacity: 0.6;
  }

  &:focus-visible {
    border-color: var(--color-active);
  }

  @media screen and (max-width: 475px) {
    padding: 7px 10px;
    font-size: var(--textXS);
  }
`;

function CountryLink({ children, to }) {
  return <BorderLink to={to}>{children}</BorderLink>;
}

export default CountryLink;

CountryLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
