import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { SettingsProvider } from '@/context/SettingsContext';

import App from '@/App.tsx';
import '@/styles/Fonts.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </HelmetProvider>,
);
