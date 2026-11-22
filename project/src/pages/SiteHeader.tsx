import brandBox from '../assets/login/brand-box.png';
import chefHat from '../assets/login/brand-chef-hat.png';

function SiteHeader() {
  return (
    <header className="site-header">
      <a aria-label="DAPO, beranda" className="brand" href="/">
        <span aria-hidden="true" className="brand__mark">
          <img alt="" className="brand__box" src={brandBox} />
          <img alt="" className="brand__hat" src={chefHat} />
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
            <path
              d="m15 21 9-12 9 12M16 28v12m8-12v12m8-12v12"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </a>
        <a className="header-login" href="/">
          Masuk
        </a>
      </div>
    </header>
  );
}

export default SiteHeader;
