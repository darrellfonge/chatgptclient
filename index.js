import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { ThemeProvider } from './src/hooks/ThemeContext';
import { BrowserRouter } from "react-router-dom";
import App from './src/App';
import './src/style.css';
import './src/mobile.css'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './src/components/Error/ErrorFallback'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      resetKeys={[]} 
    >
    <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>
    </ErrorBoundary>
  </Provider>
);