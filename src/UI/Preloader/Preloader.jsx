// IMPORT PACKAGES
import styled from 'styled-components';

// IMPORT IMAGES
import spinner from '../../assets/images/spinner.svg';

// STYLES
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background:
    url(${spinner}) center center/auto no-repeat,
    ${(props) => props.theme.backgroundColor};
`;

// PRELOADER COMPONENT
function Preloader() {
  return <Container />;
}

export default Preloader;
