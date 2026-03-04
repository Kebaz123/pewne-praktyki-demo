import { Helmet } from 'react-helmet-async';

import { translations, type Language } from '@/locales';
import { useSettings } from '@/context/SettingsContext';

const Tips = () => {
  const { language }: { language: Language } = useSettings();
  const t = translations[language].tips;

  return (
    <div>
      <Helmet>
        <title>{t.title}</title>
      </Helmet>

      <h1 id="noData">Zajrzyj tutaj później.</h1>
    </div>
  );
};

export default Tips;
