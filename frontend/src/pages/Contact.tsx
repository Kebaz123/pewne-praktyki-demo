import { Helmet } from 'react-helmet-async';
import '@/styles/Contact.css';

import EmailIcon from '@/assets/icons/email.svg?react';
import InstagramIcon from '@/assets/icons/instagram.svg?react';
import TiktokIcon from '@/assets/icons/tiktok.svg?react';

import { translations, type Language } from '@/locales';
import { useSettings } from '@/context/SettingsContext';

const Contact = () => {
  const { language }: { language: Language } = useSettings();
  const t = translations[language].contact;

  return (
    <div id="contactPage">
      <Helmet>
        <title>{t.title}</title>
      </Helmet>

      <h1>{t.header}</h1>
      <p>{t.desc1}</p>
      <p>{t.desc2}</p>
      <div id="links">
        <div className="link">
          <EmailIcon />
          <a href="mailto:pewnepraktyki@gmail.com">pewnepraktyki@gmail.com</a>
        </div>
        <div className="link">
          <InstagramIcon />
          <a href="https://instagram.com/pewne_praktyki/" target="_blank">
            Instagram
          </a>
        </div>
        <div className="link">
          <TiktokIcon />
          <a href="https://tiktok.com/@pewne.praktyki/" target="_blank">
            TikTok
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
