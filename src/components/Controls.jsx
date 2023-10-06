// IMPORT PACKAGES
import styled from 'styled-components';

// IMPORT COMPONENTS
import Search from '../UI/Search/Search';
import Select from '../UI/Select/Select';

// STYLES
const Section = styled.section`
  max-width: 1440px;
  box-sizing: border-box;
  padding: 48px 80px 0;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 34px;
  }

  @media screen and (max-width: 475px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 24px;
  }
`;

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
    <Section>
      <Wrapper>
        <Search formId='search' placeholder='Search for a country...' />
        <Select />
      </Wrapper>
    </Section>
  );
}

export default Controls;
