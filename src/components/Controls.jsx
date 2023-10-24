// IMPORT PACKAGES
import styled from 'styled-components';

// IMPORT COMPONENTS
import Container from './Container';
import Search from '../features/controls/Search';
import Select from '../features/controls/Select';

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
        <Search formId='search' placeholder='Search for a country...' />
        <Select />
      </Wrapper>
    </Container>
  );
}

export default Controls;
