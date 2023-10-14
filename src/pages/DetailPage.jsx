// IMPORT PACKAGES
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

// IMPORT COMPONENTS
import Container from '../components/Container';
import Button from '../UI/Button/Button';
import Preloader from '../UI/Preloader/Preloader';
import Details from '../components/Details';

// IMPORT SELECTORS
import { selectDetails } from '../store/details/detailsSelectors';

// IMPORT ACTIONS
import {
  clearDetails,
  loadCountryByCode,
} from '../store/details/detailsActions';

// STYLES
const Info = styled.h1`
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
`;

function DetailPage() {
  // HOOKS
  const { code } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentCountry, status, error } = useSelector(selectDetails);

  // HANDLE BUTTON BACK CLICK
  const handleBtnBackClick = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    dispatch(loadCountryByCode(code));

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, code]);

  return (
    <Container $details>
      <Button onClick={handleBtnBackClick}>Back</Button>
      {error && <Info>Can't fetch data</Info>}
      {status === 'loading' && <Preloader />}
      {currentCountry && <Details {...currentCountry} />}
    </Container>
  );
}

export default DetailPage;
