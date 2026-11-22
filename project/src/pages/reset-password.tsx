import { useState, type FormEvent } from 'react';
import eyeOff from '../assets/reset-password/eye-off.png';
import lockIcon from '../assets/reset-password/lock.png';
import passwordResetIcon from '../assets/reset-password/password-reset.png';
import brandBox from '../assets/login/brand-box.png';
import chefHat from '../assets/login/brand-chef-hat.png';
import './login.css';
import './reset-password.css';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmation) {
      setMessage('Konfirmasi kata sandi tidak cocok.');
      return;
    }

    setMessage('Pembaruan kata sandi belum terhubung ke layanan akun.');
  };

  return (
    <main className="login-page reset-page">
      <div aria-hidden="true" className="login-background" />

      <a aria-label="DAPO" className="reset-brand" href="/">
        <span aria-hidden="true" className="reset-brand__mark">
          <img alt="" className="reset-brand__box" src={brandBox} />
          <img alt="" className="reset-brand__hat" src={chefHat} />
        </span>
        <span className="reset-brand__name">DAPO</span>
      </a>

      <section aria-labelledby="reset-title" className="reset-card">
        <h1 className="reset-title" id="reset-title">
          Buat Kata Sandi Baru
        </h1>
        <p className="reset-description">Masukkan kata sandi baru Anda di bawah ini</p>

        <form className="reset-form" onSubmit={handleSubmit}>
          <div className="reset-field reset-field--password">
            <label htmlFor="new-password">Kata sandi baru</label>
            <div className="reset-input-wrap">
              <img alt="" className="reset-input-icon" src={lockIcon} />
              <input
                autoComplete="new-password"
                id="new-password"
                minLength={8}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setMessage('');
                }}
                placeholder="Min. 8 Karakter"
                required
                type={showPassword ? 'text' : 'password'}
                value={password}
              />
              <button
                aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                aria-pressed={showPassword}
                className="reset-visibility"
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

          <div className="reset-field reset-field--confirmation">
            <label htmlFor="confirm-password">Konfirmasi kata sandi</label>
            <div className="reset-input-wrap">
              <img alt="" className="reset-input-icon" src={passwordResetIcon} />
              <input
                autoComplete="new-password"
                id="confirm-password"
                minLength={8}
                onChange={(event) => {
                  setConfirmation(event.target.value);
                  setMessage('');
                }}
                placeholder="Ulangi Kata Sandi"
                required
                type={showConfirmation ? 'text' : 'password'}
                value={confirmation}
              />
              <button
                aria-label={
                  showConfirmation ? 'Sembunyikan konfirmasi kata sandi' : 'Tampilkan konfirmasi kata sandi'
                }
                aria-pressed={showConfirmation}
                className="reset-visibility"
                onClick={() => setShowConfirmation((visible) => !visible)}
                type="button"
              >
                {showConfirmation ? (
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

          <button className="reset-submit" type="submit">
            Perbarui Kata Sandi <span aria-hidden="true">&gt;</span>
          </button>

          <p aria-live="polite" className="reset-message">
            {message}
          </p>
        </form>

        <a className="reset-back" href="/">
          &lt; Kembali ke Login
        </a>
      </section>
    </main>
  );
}

export default ResetPassword;
