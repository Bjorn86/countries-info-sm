// IMPORT PACKAGES
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

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
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
