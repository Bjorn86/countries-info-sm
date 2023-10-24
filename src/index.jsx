// IMPORT PACKAGES
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';

// IMPORT STYLES
import './index.css';

// IMPORT STORES
import { store, persistor } from './store';

// IMPORT COMPONENTS
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
