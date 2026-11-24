import { useState, type FormEvent } from 'react';
import envelope from '../assets/login/envelope.png';
import facebookLogo from '../assets/login/facebook.svg';
import googlePart1 from '../assets/login/google-part-1.svg';
import googlePart2 from '../assets/login/google-part-2.svg';
import googlePart3 from '../assets/login/google-part-3.svg';
import googlePart4 from '../assets/login/google-part-4.svg';
import eyeOff from '../assets/login/eye-off.png';
import lock from '../assets/login/lock.png';
import SiteHeader from './SiteHeader';
import './login.css';

const googleLogoParts = [googlePart1, googlePart2, googlePart3, googlePart4];

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = '/dashboard';
  };

  return (
    <main className="login-page">
      <div aria-hidden="true" className="login-background" />

      <SiteHeader />

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
            <a className="forgot-password" href="/reset-password">
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

          <p className="signup-prompt">
            Belum Punya Akun? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;
