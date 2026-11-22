import { useState, type FormEvent } from 'react';
import emailIcon from '../assets/signup/email.png';
import eyeOff from '../assets/signup/eye-off.png';
import lockIcon from '../assets/signup/lock.png';
import personIcon from '../assets/signup/person.png';
import phoneIcon from '../assets/signup/phone.png';
import SiteHeader from './SiteHeader';
import './signup.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Pendaftaran belum terhubung ke layanan akun.');
  };

  return (
    <main className="login-page">
      <div aria-hidden="true" className="login-background" />
      <SiteHeader />

      <section aria-labelledby="signup-title" className="signup-card">
        <h1 className="signup-title" id="signup-title">
          Daftar
        </h1>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-field signup-field--name">
            <label htmlFor="full-name">Nama Lengkap</label>
            <div className="signup-input-wrap">
              <img alt="" className="signup-input-icon" src={personIcon} />
              <input
                autoComplete="name"
                id="full-name"
                onChange={(event) => setFullName(event.target.value)}
                placeholder="John Zoe"
                required
                value={fullName}
              />
            </div>
          </div>

          <div className="signup-field signup-field--phone">
            <label htmlFor="phone">No. Telepon</label>
            <div className="signup-input-wrap">
              <img alt="" className="signup-input-icon" src={phoneIcon} />
              <input
                autoComplete="tel"
                id="phone"
                onChange={(event) => setPhone(event.target.value)}
                placeholder="08xxxxx"
                required
                type="tel"
                value={phone}
              />
            </div>
          </div>

          <div className="signup-field signup-field--email">
            <label htmlFor="signup-email">Gmail</label>
            <div className="signup-input-wrap">
              <img alt="" className="signup-input-icon" src={emailIcon} />
              <input
                autoComplete="email"
                id="signup-email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="nama@gmail.com"
                required
                type="email"
                value={email}
              />
            </div>
          </div>

          <div className="signup-field signup-field--password">
            <label htmlFor="signup-password">Password</label>
            <div className="signup-input-wrap">
              <img alt="" className="signup-input-icon" src={lockIcon} />
              <input
                autoComplete="new-password"
                id="signup-password"
                minLength={8}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Min. 8 Karakter"
                required
                type={showPassword ? 'text' : 'password'}
                value={password}
              />
              <button
                aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                aria-pressed={showPassword}
                className={`signup-password-visibility${showPassword ? ' is-visible' : ''}`}
                onClick={() => setShowPassword((visible) => !visible)}
                type="button"
              >
                {showPassword ? (
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <img alt="" src={eyeOff} />
                )}
              </button>
            </div>
          </div>

          <label className="signup-terms">
            <input
              checked={acceptedTerms}
              onChange={(event) => setAcceptedTerms(event.target.checked)}
              required
              type="checkbox"
            />
            <span>
              Saya Menyetujui <a href="#syarat-ketentuan">Syarat &amp; Ketentuan</a> dan{' '}
              <a href="#kebijakan-privasi">Kebijakan Privasi</a> DEPO
            </span>
          </label>

          <button className="signup-submit" disabled={!acceptedTerms} type="submit">
            Buat Akun
          </button>

          <p aria-live="polite" className="signup-message">
            {message}
          </p>
        </form>
      </section>
    </main>
  );
}

export default Signup;
