// IMPORT PACKAGES
import styled from 'styled-components';
import PropTypes from 'prop-types';

// STYLES
const Wrapper = styled.main`
  max-width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  flex: 1 1 auto;
`;

// MAIN COMPONENT
function Main({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Main;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
