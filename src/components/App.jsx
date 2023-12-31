// IMPORT PACKAGES
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// IMPORT STYLES
import GlobalStyles from '../styles/GlobalStyles';
import { lightTheme, darkTheme } from '../styles/themes';

// IMPORT COMPONENTS
import Header from '../UI/Header/Header';
import Main from './Main';
import HomePage from '../pages/HomePage';
import DetailsPage from '../pages/DetailsPage';
import NotFound from '../pages/NotFound';

// APP CORE COMPONENT
function App() {
  // HOOKS
  const currentTheme = useSelector((state) => state.theme);

  // VARIABLES
  const theme = currentTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:code' element={<DetailsPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

export default App;
