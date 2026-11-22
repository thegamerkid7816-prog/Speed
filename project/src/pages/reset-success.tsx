import brandBox from '../assets/login/brand-box.png';
import chefHat from '../assets/login/brand-chef-hat.png';
import successCheck from '../assets/reset-success/success-check.svg';
import './login.css';
import './reset-success.css';

function ResetSuccess() {
  return (
    <main className="login-page reset-success-page">
      <div aria-hidden="true" className="login-background" />

      <a aria-label="DAPO" className="reset-success-brand" href="/">
        <span aria-hidden="true" className="reset-success-brand__mark">
          <img alt="" className="reset-success-brand__box" src={brandBox} />
          <img alt="" className="reset-success-brand__hat" src={chefHat} />
        </span>
        <span className="reset-success-brand__name">DAPO</span>
      </a>

      <section aria-labelledby="reset-success-title" className="reset-success-card">
        <div className="reset-success-icon" aria-hidden="true">
          <img alt="" src={successCheck} />
        </div>

        <h1 className="reset-success-title" id="reset-success-title">
          Kata Sandi Berhasil
          <br />
          Diperbarui
        </h1>

        <p className="reset-success-description">
          Sekarang Anda dapat kembali ke akun DAPO Anda
        </p>

        <a className="reset-success-submit" href="/dashboard">
          Masuk Sekarang <span aria-hidden="true">&gt;</span>
        </a>
      </section>
    </main>
  );
}

export default ResetSuccess;
