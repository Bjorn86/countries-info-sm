// IMPORT PACKAGES
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

// IMPORT STYLES
import './index.css';

// IMPORT CONFIGURE STORE
import { configureStore } from './store/index';

// IMPORT COMPONENTS
import App from './components/App';

// CREATE STORE
const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
);
