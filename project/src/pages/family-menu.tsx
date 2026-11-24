import brandBox from '../assets/dashboard/brand-box.png';
import brandHat from '../assets/dashboard/brand-hat.png';
import basket from '../assets/dashboard/logged-in-basket.png';
import avatar from '../assets/membership/avatar.png';
import rendang from '../assets/food-kits/rendang.png';
import ayamTaliwang from '../assets/food-kits/ayam-taliwang.png';
import './practical-menu.css';

const menuItems = [
  {
    title: 'Rendang DAPO',
    rating: '4.8',
    people: '2-3 Orang',
    time: '25 Menit',
    description: 'Ayam bumbu rendang autentik Padang dengan kelapa sangrai.',
    price: 'Rp 135.000',
    image: rendang,
  },
  {
    title: 'Ayam Taliwang DAPO',
    rating: '4.9',
    people: '2 Orang',
    time: '30 Menit',
    description: 'Ayam khas Lombok dengan bumbu pedas gurih yang menggugah selera.',
    price: 'Rp 90.000',
    image: ayamTaliwang,
  },
];

function FamilyMenu() {
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
            <h1>Menu Keluarga</h1>
            <p>Hidangan porsi besar yang dirancang khusus untuk momen kebersamaan.<br />Praktis, segar, dan siap dimasak dalam hitungan menit.</p>
          </div>
        </div>

        <div className="practical-grid">
          {menuItems.map((item) => (
            <article className="practical-card" key={item.title}>
              <div className="practical-card__image">
                <img src={item.image} alt={item.title} />
                <span>Menu Praktis</span>
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
                <a href={`/food-kit-detail/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}>Lihat Detail</a>
              </div>
            </article>
          ))}
        </div>

        <nav className="practical-pagination" aria-label="Paginasi Menu Keluarga">
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

export default FamilyMenu;
