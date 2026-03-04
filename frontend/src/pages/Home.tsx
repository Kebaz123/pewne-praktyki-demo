import { Helmet } from 'react-helmet-async';
import '@/styles/Home.css';

import GlowingTickIcon from '@/assets/icons/glowingTick.svg?react';
import InstagramIcon from '@/assets/icons/instagram.svg?react';
import TiktokIcon from '@/assets/icons/tiktok.svg?react';

import { useSettings } from '@/context/SettingsContext';
import { translations } from '@/locales';
import type { Language } from '@/locales';

const Home = () => {
  const { language }: { language: Language } = useSettings();
  const t = translations[language].home;

  return (
    <>
      <Helmet>
        <title>Pewne Praktyki</title>
      </Helmet>

      <section id="mainHeader">
        <div>
          <div id="logo">
            <div id="greenTitle">
              <span className="greenAccent greenSelection">pewne</span>
              <GlowingTickIcon />
            </div>
            <span id="whiteTitle" className="whiteSelection">
              praktyki.pl
            </span>
          </div>
          <div id="belowLogo">
            <span className="greenAccent greenSelection">{t.subtitle1}</span>
            <br />
            <span className="whiteSelection">{t.subtitle2}</span>
          </div>
        </div>

        <div id="titlesContainer">
          <div id="scrollableTitles">
            {[...t.titles, ...t.titles].map((word, index) => (
              <p key={index} className="adjective">
                {word}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <img src="/images/whiteboard.jpg" />
        <div>
          <p>{t.article1.title}</p>
          <span>{t.article1.content}</span>
        </div>
      </section>

      <section className="section">
        <img src="/images/thinking.jpg" />
        <div>
          <p>{t.article2.title}</p>
          <span>{t.article2.content}</span>
        </div>
      </section>

      <section className="section">
        <img src="/images/office.jpg" />
        <div>
          <p>{t.article3.title}</p>
          <span>{t.article3.content}</span>
        </div>
      </section>

      <section className="section">
        <img src="/images/school.jpg" />
        <div>
          <p>{t.article4.title}</p>
          <span>{t.article4.content}</span>
        </div>
      </section>

      <section id="socialSection" className="section">
        <p>{t.findUs}</p>
        <div id="socialLinks">
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
      </section>
      <br />
    </>
  );
};

export default Home;
