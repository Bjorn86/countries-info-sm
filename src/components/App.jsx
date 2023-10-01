// IMPORT PACKAGES
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// IMPORT STYLES
import GlobalStyles from '../styles/GlobalStyles';
import { lightTheme, darkTheme } from '../styles/themes';

// IMPORT COMPONENTS
import Header from '../UI/Header/Header';

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
    </ThemeProvider>
  );
}

export default App;
