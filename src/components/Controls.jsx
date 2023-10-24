// IMPORT PACKAGES
import styled from 'styled-components';

// IMPORT COMPONENTS
import Container from './Container';
import ControlsSearch from '../features/controls/ControlsSearch';
import ControlsSelect from '../features/controls/ControlsSelect';

// STYLES
const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

// CONTROLS COMPONENT
function Controls() {
  return (
    <Container $controls>
      <Wrapper>
        <ControlsSearch formId='search' placeholder='Search for a country...' />
        <ControlsSelect />
      </Wrapper>
    </Container>
  );
}

export default Controls;
