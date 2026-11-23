import brandBox from '../assets/dashboard/brand-box.png';
import brandHat from '../assets/dashboard/brand-hat.png';
import basket from '../assets/dashboard/logged-in-basket.png';
import avatar from '../assets/membership/avatar.png';
import salmon from '../assets/food-kits/salmon.png';
import gado from '../assets/food-kits/gado.png';
import './practical-menu.css';

const menuItems = [
  {
    title: 'Salmon Poke Bowl',
    rating: '4.8',
    people: '1 Orang',
    time: '15 Menit',
    description: 'Irisan salmon segar dengan alpukat, sayuran, dan saus wijen sangrai.',
    price: 'Rp 60.000',
    image: salmon,
  },
  {
    title: 'Gado-Gado Premium',
    rating: '4.7',
    people: '2-3 Orang',
    time: '15 Menit',
    description: 'Sayuran segar lengkap dengan bumbu kacang premium khas Jakarta.',
    price: 'Rp 42.000',
    image: gado,
  },
];

function HealthyMenu() {
  return (
    <main className="practical-page">
      <header className="practical-header">
        <a className="practical-brand" href="/dashboard" aria-label="DAPO Beranda">
          <span className="practical-brand__mark" aria-hidden="true">
            <img className="practical-brand__box" src={brandBox} alt="" />
            <img className="practical-brand__hat" src={brandHat} alt="" />
          </span>
          <span className="practical-brand__name">DAPO</span>
        </a>
        <nav className="practical-nav" aria-label="Navigasi utama">
          <a href="/dashboard">Beranda</a>
          <a href="/food-kits">Food Kits</a>
          <a className="practical-nav__active" href="/categories">Kategori</a>
          <a href="/about-us">Tentang Kami</a>
        </nav>
        <div className="practical-actions">
          <a className="practical-basket" href="#keranjang" aria-label="Keranjang belanja">
            <img src={basket} alt="" />
          </a>
          <button className="practical-avatar" type="button" aria-label="Profil pengguna">
            <img src={avatar} alt="" />
          </button>
        </div>
      </header>

      <section className="practical-main">
        <div className="practical-heading">
          <a className="practical-back" href="/categories" aria-label="Kembali ke kategori">‹</a>
          <div>
            <h1>Menu Sehat</h1>
            <p>Keseimbangan nutrisi dalam setiap sajian.<br />Rendah kalori, tinggi rasa.</p>
          </div>
        </div>

        <div className="practical-grid">
          {menuItems.map((item) => (
            <article className="practical-card" key={item.title}>
              <div className="practical-card__image">
                <img src={item.image} alt={item.title} />
                <span>Menu Sehat</span>
                <button type="button" aria-label={`Tambah ${item.title} ke keranjang`}>+</button>
              </div>
              <div className="practical-card__body">
                <div className="practical-card__rating">
                  <span aria-hidden="true">★</span>
                  <strong>{item.rating}</strong>
                  <span aria-hidden="true">♙</span>
                  <small>{item.people}</small>
                  <span aria-hidden="true">◷</span>
                  <small>{item.time}</small>
                </div>
                <div className="practical-card__title">
                  <h2>{item.title}</h2>
                  <strong>{item.price}</strong>
                </div>
                <p>{item.description}</p>
                <a href="#detail">Lihat Detail</a>
              </div>
            </article>
          ))}
        </div>

        <nav className="practical-pagination" aria-label="Paginasi Menu Sehat">
          <button type="button" aria-label="Halaman sebelumnya">‹</button>
          <button className="is-current" type="button" aria-label="Halaman 1" aria-current="page">1</button>
          <button type="button" aria-label="Halaman berikutnya">›</button>
        </nav>
      </section>

      <footer className="practical-footer">
        <div className="practical-footer__grid">
          <div><h2>DAPO</h2><p>Membawa kehangatan masakan rumahan ke setiap dapur modern di Indonesia.</p></div>
          <div><h3>Menu</h3><a href="/food-kits">Semua Resep</a><a href="/food-kits">Menu Mingguan</a><a href="/categories">Kategori Sehat</a><a href="/membership">Paket Hadiah</a></div>
          <div><h3>Perusahaan</h3><a href="/about-us">Tentang Kami</a><a href="/about-us">Keberlanjutan</a><a href="/about-us">Karir</a><a href="/about-us">Kontak</a></div>
          <div><h3>Dapatkan Berita</h3><p>Dapatkan promo menarik dan resep eksklusif setiap minggu.</p><form onSubmit={(event) => event.preventDefault()}><input aria-label="Email Anda" placeholder="Email Anda" type="email" /><button type="submit">→</button></form></div>
        </div>
        <div className="practical-footer__bottom"><p>© 2024 DAPO Food Kit Delivery. Kesegaran diantar.</p><div><a href="#privacy">Kebijakan Privasi</a><a href="#terms">Ketentuan Layanan</a><a href="#faq">FAQ</a></div></div>
      </footer>
    </main>
  );
}

export default HealthyMenu;
