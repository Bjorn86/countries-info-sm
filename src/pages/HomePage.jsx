// IMPORT PACKAGES
import { Helmet } from 'react-helmet-async';

// IMPORT COMPONENTS
import Controls from '../components/Controls';
import CountriesList from '../features/countries/CountriesList';

// HOMEPAGE COMPONENT
function HomePage() {
  return (
    <>
      <Helmet>
        <meta name='description' content='Countries Info App' />
        <meta
          name='keywords'
          content='countries, information, capital, currency, language, population, guide'
        />
        <title>Countries Info</title>
      </Helmet>
      <Controls />
      <CountriesList />
    </>
  );
}

export default HomePage;
