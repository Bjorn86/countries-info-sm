// IMPORT PACKAGES
import styled from 'styled-components';
import PropTypes from 'prop-types';

// STYLES
const Section = styled.section`
  max-width: 1440px;
  box-sizing: border-box;
  padding: ${(props) => (props.$detail ? '80px' : '0 80px')};
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
    ${(props) => props.$detail && 'padding-top: 40px;'}
  }

  @media screen and (max-width: 475px) {
    padding-left: ${(props) => (props.$detail ? '28px' : '16px')};
    padding-right: ${(props) => (props.$detail ? '28px' : '16px')};
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
