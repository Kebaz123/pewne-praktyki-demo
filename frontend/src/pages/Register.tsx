import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '@/styles/Form.css';

import PersonIcon from '@/assets/icons/person.svg?react';
import EmailIcon from '@/assets/icons/email.svg?react';
import KeyIcon from '@/assets/icons/key.svg?react';

const Register = () => {
  return (
    <div id="formPage">
      <Helmet>
        <title>Zarejestruj się - Pewne Praktyki</title>
      </Helmet>

      <div>
        <Link to="/logowanie">Zaloguj się</Link>
        <Link to="/rejestracja">Zarejestruj się</Link>
      </div>

      <div id="formBox">
        <div className="formInput">
          <PersonIcon />
          <input type="text" placeholder="Imię i nazwisko" />
        </div>

        <div className="formInput">
          <EmailIcon />
          <input
            type="email"
            name="email"
            placeholder="Adres e-mail"
            autoComplete="on"
          />
        </div>

        <div className="formInput">
          <KeyIcon />
          <input type="password" placeholder="Hasło" />
        </div>

        <div className="formInput">
          <KeyIcon />
          <input type="password" placeholder="Powtórz hasło" />
        </div>

        <button className="formButton">Zaloguj się</button>
      </div>
    </div>
  );
};

export default Register;
