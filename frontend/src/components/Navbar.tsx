import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { useSettings } from '@/context/SettingsContext';
import { translations } from '@/locales';
import '@/components/Navbar.css';

import FlagPL from '@/assets/images/PL-flag.png';
import FlagUK from '@/assets/images/UK-flag.png';
import DarkIcon from '@/assets/icons/darkTheme.svg?react';
import LightIcon from '@/assets/icons/lightTheme.svg?react';
import MenuIcon from '@/assets/icons/menu.svg?react';

const Navbar = () => {
  const { theme, language, setTheme, setLanguage } = useSettings();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const themeIcon = theme === 'dark' ? <LightIcon /> : <DarkIcon />;

  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  const t = translations[language].navbar;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target as Node)
      )
        setMobileMenuOpen(false);
    }

    document.addEventListener('pointerdown', handleClickOutside);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <nav id="navbar">
      <NavLink to="/" id="navLogo">
        <span className="greenAccent">pewne</span>
        <span className="whiteAccent">praktyki.pl</span>
      </NavLink>

      <div id="navCenter">
        <NavLink to="/">
          <span>{t.about}</span>
        </NavLink>

        <NavLink to={t.searchURL}>
          <span>{t.searchTitle}</span>
        </NavLink>

        <NavLink to={t.tipsURL}>
          <span>{t.tips}</span>
        </NavLink>

        <NavLink to={t.contactURL}>
          <span>{t.contactTitle}</span>
        </NavLink>
      </div>

      <div id="navRight">
        <button
          id="themeButton"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {themeIcon}
        </button>

        <div>
          <button
            className="langButton"
            onClick={() => setLangMenuOpen(!langMenuOpen)}
          >
            <img id="flagIcon" src={language === 'pl' ? FlagPL : FlagUK} />
            <span className={`arrow ${langMenuOpen ? 'open' : ''}`}>▾</span>
          </button>

          {createPortal(
            <div
              className={langMenuOpen ? 'langDropdown open' : 'langDropdown'}
            >
              <button
                onClick={() => {
                  setLanguage('pl');
                  setLangMenuOpen(false);
                  if (currentPath === '/contact') navigate('/kontakt');
                  else if (currentPath === '/search') navigate('/wyszukiwarka');
                }}
              >
                <img src={FlagPL} className="smallFlag" />
                <span>Polski</span>
              </button>
              <button
                onClick={() => {
                  setLanguage('en');
                  setLangMenuOpen(false);
                  if (currentPath === '/kontakt') navigate('/contact');
                  else if (currentPath === '/wyszukiwarka') navigate('/search');
                }}
              >
                <img src={FlagUK} className="smallFlag" />
                <span>English</span>
              </button>
            </div>,
            document.body,
          )}
        </div>
      </div>

      <div id="mobileMenu">
        <button
          ref={mobileMenuButtonRef}
          id="mobileMenuButton"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <MenuIcon />
        </button>
        {createPortal(
          <div
            ref={mobileMenuRef}
            id="mobileDropdown"
            className={mobileMenuOpen ? 'open' : ''}
          >
            <div id="navbarLinks">
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                <span>{t.about}</span>
              </NavLink>

              <NavLink
                to={t.searchURL}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{t.searchTitle}</span>
              </NavLink>

              <NavLink to={t.tipsURL} onClick={() => setMobileMenuOpen(false)}>
                <span>{t.tips}</span>
              </NavLink>

              <NavLink
                to={t.contactURL}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{t.contactTitle}</span>
              </NavLink>
            </div>

            <button
              className="mobileThemeButton"
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
                setMobileMenuOpen(false);
              }}
            >
              {themeIcon}
              {t.theme}
            </button>

            <button
              onClick={() => {
                const newLang = language === 'pl' ? 'en' : 'pl';
                setLanguage(newLang);

                if (newLang === 'pl') {
                  if (currentPath === '/contact') navigate('/kontakt');
                  else if (currentPath === '/search') navigate('/wyszukiwarka');
                } else {
                  if (currentPath === '/kontakt') navigate('/contact');
                  else if (currentPath === '/wyszukiwarka') navigate('/search');
                }

                setMobileMenuOpen(false);
              }}
            >
              <div className="mobileLangOption">
                <img id="flagIcon" src={language === 'pl' ? FlagUK : FlagPL} />
                <span>{t.changeLang}</span>
              </div>
            </button>
          </div>,
          document.body,
        )}
      </div>
    </nav>
  );
};

export default Navbar;
