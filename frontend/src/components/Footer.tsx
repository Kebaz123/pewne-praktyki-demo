import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div id="footerLinks">
        <a href="docs/Polityka prywatności.pdf">Polityka prywatności (PL)</a>
        <span className="dot">•</span>
        <a href="docs/Polityka prywatności pp.pl po angielsku.pdf">
          Privacy policy (EN)
        </a>
        <span className="dot">•</span>
        <a href="docs/Regulamin seriwsu Pewne Praktyki.pdf">
          Regulamin serwisu (PL)
        </a>
        <span className="dot">•</span>
        <a href="docs/Regulamin pp.pl po angielsku.pdf">
          Terms and conditions (EN)
        </a>
      </div>
      <div id="secondRow">
        <a href="https://zwolnienizteorii.pl/" target="_blank">
          <img src="./images/zwolnieni-z-teorii.png" />
        </a>
        <p>© Pewne Praktyki 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
