import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import './localization/i18n';
import { LocalizationProvider } from './localization/LocalizationContext';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalizationProvider>
            <ThemeProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
