import { Helmet } from 'react-helmet-async';
import FrustratedIcon from '@/assets/icons/frustrated.svg?react';
import '@/styles/NotFound.css';

import { translations, type Language } from '@/locales';
import { useSettings } from '@/context/SettingsContext';

const NotFound = () => {
  const { language }: { language: Language } = useSettings();
  const t = translations[language].notFound;

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
      </Helmet>

      <div id="notFoundPage">
        <h1>404</h1>
        <p>{t.text}</p>
        <FrustratedIcon />
      </div>
    </>
  );
};

export default NotFound;
