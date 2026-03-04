import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '@/styles/Form.css';

import EmailIcon from '@/assets/icons/email.svg?react';
import KeyIcon from '@/assets/icons/key.svg?react';

const Login = () => {
  return (
    <div id="formPage">
      <Helmet>
        <title>Zaloguj się - Pewne Praktyki</title>
      </Helmet>

      <div>
        <Link to="/logowanie">Zaloguj się</Link>
        <Link to="/rejestracja">Zarejestruj się</Link>
      </div>

      <div id="formBox">
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
          <input type="password" name="password" placeholder="Hasło" />
        </div>

        <button className="formButton">Zaloguj się</button>
      </div>
    </div>
  );
};

export default Login;
