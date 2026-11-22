import { useState, type FormEvent } from 'react';
import brandBox from '../assets/login/brand-box.png';
import chefHat from '../assets/login/brand-chef-hat.png';
import envelope from '../assets/login/envelope.png';
import facebookLogo from '../assets/login/facebook.svg';
import googlePart1 from '../assets/login/google-part-1.svg';
import googlePart2 from '../assets/login/google-part-2.svg';
import googlePart3 from '../assets/login/google-part-3.svg';
import googlePart4 from '../assets/login/google-part-4.svg';
import eyeOff from '../assets/login/eye-off.png';
import lock from '../assets/login/lock.png';
import './login.css';

const googleLogoParts = [googlePart1, googlePart2, googlePart3, googlePart4];

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Login belum terhubung ke layanan autentikasi.');
  };

  return (
    <main className="login-page">
      <div aria-hidden="true" className="login-background" />

      <header className="site-header">
        <a aria-label="DAPO, beranda" className="brand" href="/">
          <span aria-hidden="true" className="brand__mark">
            <img className="brand__box" src={brandBox} />
            <img className="brand__hat" src={chefHat} />
          </span>
          <span className="brand__name">DAPO</span>
        </a>

        <nav aria-label="Navigasi utama" className="site-nav">
          <a className="site-nav__link site-nav__link--active" href="/">
            Beranda
          </a>
          <a className="site-nav__link" href="#food-kits">
            Food Kits
          </a>
          <a className="site-nav__link" href="#kategori">
            Kategori
          </a>
          <a className="site-nav__link" href="#tentang-kami">
            Tentang Kami
          </a>
        </nav>

        <div className="header-actions">
          <a aria-label="Keranjang belanja" className="basket-link" href="#keranjang">
            <svg aria-hidden="true" viewBox="0 0 48 56">
              <path d="M8 21h32l-3.1 26H11.1L8 21Z" fill="currentColor" />
              <path d="m15 21 9-12 9 12M16 28v12m8-12v12m8-12v12" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </a>
          <a className="header-login" href="#login">
            Masuk
          </a>
        </div>
      </header>

      <section aria-labelledby="login-title" className="login-card" id="login">
        <h1 className="login-title" id="login-title">
          Masuk
        </h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field login-field--email">
            <label htmlFor="email">Gmail</label>
            <div className="login-input-wrap">
              <img alt="" className="login-input-icon" src={envelope} />
              <input
                autoComplete="email"
                id="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="nama@gmail.com"
                required
                type="email"
                value={email}
              />
            </div>
          </div>

          <div className="login-field login-field--password">
            <label htmlFor="password">Password</label>
            <div className="login-input-wrap">
              <img alt="" className="login-input-icon" src={lock} />
              <input
                autoComplete="current-password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Masukkan Kata Sandi"
                required
                type={showPassword ? 'text' : 'password'}
                value={password}
              />
              <button
                aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                aria-pressed={showPassword}
                className="password-visibility"
                onClick={() => setShowPassword((visible) => !visible)}
                type="button"
              >
                <img alt="" src={eyeOff} />
              </button>
            </div>
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                type="checkbox"
              />
              <span>Ingatkan Saya</span>
            </label>
            <a className="forgot-password" href="#lupa-kata-sandi">
              Lupa Kata Sandi?
            </a>
          </div>

          <button className="login-submit" type="submit">
            Log in
          </button>

          <p aria-hidden="true" className="social-divider">
            Atau
          </p>

          <div className="social-actions">
            <button className="social-button" type="button">
              <span aria-hidden="true" className="google-mark">
                {googleLogoParts.map((part) => (
                  <img alt="" key={part} src={part} />
                ))}
              </span>
              <span>Masuk dengan Google</span>
            </button>
            <button className="social-button" type="button">
              <img alt="" className="facebook-mark" src={facebookLogo} />
              <span>Masuk dengan Facebook</span>
            </button>
          </div>

          <p aria-live="polite" className="login-message">
            {message}
          </p>

          <p className="signup-prompt">
            Belum Punya Akun? <a href="#sign-up">Sign Up</a>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;
