// IMPORT PACKAGES
import styled from 'styled-components';
import PropTypes from 'prop-types';

// STYLES
const Wrapper = styled.main`
  max-width: 100%;
  padding: 48px 0;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.backgroundColor};
  flex: 1 1 auto;

  @media screen and (max-width: 800px) {
    padding-top: 34px;
    padding-bottom: 34px;
  }

  @media screen and (max-width: 475px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

// MAIN COMPONENT
function Main({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Main;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
