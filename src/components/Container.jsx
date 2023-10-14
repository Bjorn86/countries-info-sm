// IMPORT PACKAGES
import styled from 'styled-components';
import PropTypes from 'prop-types';

// STYLES
const Section = styled.section`
  max-width: 1440px;
  box-sizing: border-box;
  margin: 0 auto;
  ${(props) => props.$controls && 'padding: 48px 80px 0;'}
  ${(props) => props.$list && 'padding: 48px 80px;'}
  ${(props) => props.$details && 'padding: 80px;'}
  ${(props) =>
    props.$notFound &&
    `
      padding: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  `}

  @media screen and (max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
    ${(props) => props.$controls && 'padding-top: 34px;'}
    ${(props) => props.$list && 'padding-top: 32px;'}
    ${(props) => props.$details && 'padding-top: 40px;'}
  }

  @media screen and (max-width: 475px) {
    ${(props) =>
      (props.$controls || props.$list || props.$notFound) &&
      'padding-left: 16px;'}
    ${(props) =>
      (props.$controls || props.$list || props.$notFound) &&
      'padding-right: 16px;'}
    ${(props) => props.$details && 'padding-left: 28px;'}
    ${(props) => props.$details && 'padding-right: 28px;'}
    ${(props) => props.$controls && 'padding-top: 24px;'}
    ${(props) => props.$notFound && 'padding-top: 50px;'}
  }
`;

// CONTAINER COMPONENT
function Container({ children, ...props }) {
  return <Section {...props}>{children}</Section>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
