import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import exampleData from '@/assets/exampleData.json';
import NotFound from './NotFound';

import { translations, type Language } from '@/locales';
import { useSettings } from '@/context/SettingsContext';
import '@/styles/Offer.css';

import LocationIcon from '@/assets/icons/location.svg?react';
import PersonIcon from '@/assets/icons/person.svg?react';
import EmailIcon from '@/assets/icons/email.svg?react';
import PhoneIcon from '@/assets/icons/phone.svg?react';
import ChechListIcon from '@/assets/icons/checklist.svg?react';
import MicroscopeIcon from '@/assets/icons/microscope.svg?react';

const Offer = () => {
  const { language }: { language: Language } = useSettings();
  const t = translations[language].offer;

  const { id } = useParams<{ id: string }>();

  if (Number.isNaN(id)) return <NotFound />;
  const offerID = Number(id);

  const offer = exampleData.find(offer => offer.id === offerID);
  if (!offer) return <NotFound />;

  return (
    <>
      <Helmet>
        <title>{offer.firma.nazwa} - Pewne Praktyki</title>
      </Helmet>
      <div id="offerPage">
        <section id="leftDesc">
          <div id="title">
            <img src={offer.firma.logo} />
            <p>{offer.firma.nazwa}</p>
          </div>
          <div className="row">
            <LocationIcon />
            <p>{offer.adres}</p>
          </div>
          <div className="row">
            <PersonIcon />
            <p>{offer.zawod}</p>
          </div>
          <p className="header">{t.contact}</p>
          <div></div>
          <div className="row">
            <EmailIcon />
            <p>{offer.email}</p>
          </div>
          <div className="row">
            <PhoneIcon />
            <p>{offer.telefon}</p>
          </div>
        </section>
        <section id="rightDesc">
          <div className="header">
            <MicroscopeIcon />
            <p>{t.description}</p>
          </div>
          <p>{offer.opis}</p>
          <div className="header">
            <ChechListIcon id="listIcon" />
            <p>{t.skills}</p>
          </div>
          <p>Brak</p>
        </section>
      </div>
    </>
  );
};

export default Offer;
