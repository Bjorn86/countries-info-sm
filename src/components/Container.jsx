// IMPORT PACKAGES
import styled from 'styled-components';
import PropTypes from 'prop-types';

// STYLES
const Section = styled.section`
  max-width: 1440px;
  box-sizing: border-box;
  padding: 0 80px;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 475px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

// CONTAINER COMPONENT
function Container({ children }) {
  return <Section>{children}</Section>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
