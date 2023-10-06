// IMPORT PACKAGES
/* import { Link } from 'react-router-dom'; */
import styled from 'styled-components';
/* import { v4 as uuidv4 } from 'uuid'; */

// IMPORT COMPONENTS
import Container from './Container';

// STYLES
const CardsList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 48px 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  gap: 76px 74px;
  justify-items: center;
  list-style: none;

  @media screen and (max-width: 1100px) {
    gap: 50px 38px;
  }

  @media screen and (max-width: 800px) {
    gap: 41px 38px;
  }
`;

/* const ListItem = styled.li`
  width: 264px;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.shadow};
  transition: opacity 0.6s;

  &:hover {
    opacity: 0.8;
  }
`; */

/* const ListLink = styled(Link)`
  text-decoration: none;
  border-radius: 5px;

  &:focus-visible {
    outline-color: var(--color-active);
  }
`; */

/* const Info = styled.p`
  width: 460px;
  margin: 0 auto;
  padding-top: 80px;
  font-family: var(--family);
  font-size: var(--textXXL);
  font-weight: 800;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
  text-align: center;

  @media screen and (max-width: 800px) {
    width: 400px;
    padding-top: 60px;
    font-size: var(--textXL);
  }

  @media screen and (max-width: 475px) {
    width: 340px;
    padding-top: 50px;
    font-size: var(--textL);
  }
`; */

// LIST COMPONENT
function List() {
  return (
    <Container>
      <CardsList />
    </Container>
  );
}

export default List;
