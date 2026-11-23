import brandBox from '../assets/dashboard/brand-box.png';
import brandHat from '../assets/dashboard/brand-hat.png';
import basket from '../assets/dashboard/logged-in-basket.png';
import avatar from '../assets/categories/avatar.png';
import practical from '../assets/categories/practical.jpg';
import healthy from '../assets/categories/healthy.png';
import family from '../assets/categories/family.png';
import student from '../assets/categories/student.jpeg';
import './categories.css';

const categories = [
  {
    title: 'Menu Praktis',
    description: 'Masak kurang dari 15 menit. Solusi tepat untuk hari-hari yang sangat sibuk.',
    image: practical,
  },
  {
    title: 'Menu Sehat',
    description: 'Keseimbangan nutrisi dalam setiap suapan. Rendah kalori namun tetap kaya rasa.',
    image: healthy,
  },
  {
    title: 'Menu Keluarga',
    description: 'Porsi besar yang hemat untuk dinikmati bersama keluarga di rumah.',
    image: family,
  },
  {
    title: 'Menu Mahasiswa',
    description: 'Hemat, praktis, dan lezat. Pilihan tepat untuk konsumsi harian yang tidak menguras kantong.',
    image: student,
  },
];

function Categories() {
  return (
    <main className="categories-page">
      <header className="categories-header">
        <a className="categories-brand" href="/dashboard" aria-label="DAPO Beranda">
          <span className="categories-brand__mark" aria-hidden="true">
            <img className="categories-brand__box" src={brandBox} alt="" />
            <img className="categories-brand__hat" src={brandHat} alt="" />
          </span>
          <span className="categories-brand__name">DAPO</span>
        </a>

        <nav className="categories-nav" aria-label="Navigasi utama">
          <a href="/dashboard">Beranda</a>
          <a href="/dashboard#food-kits">Food Kits</a>
          <a className="categories-nav__active" href="/categories">Kategori</a>
          <a href="/about-us">Tentang Kami</a>
        </nav>

        <div className="categories-actions">
          <a className="categories-basket" href="#keranjang" aria-label="Keranjang belanja">
            <img src={basket} alt="" />
          </a>
          <button className="categories-avatar" type="button" aria-label="Profil pengguna">
            <img src={avatar} alt="" />
          </button>
        </div>
      </header>

      <section className="categories-main">
        <div className="categories-heading">
          <h1>Temukan Menu Sesuai Selera Anda</h1>
          <p>Pilih kategori makanan favorit dan temukan berbagai paket food kit yang siap dimasak di rumah.</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.title}>
              <div className="category-card__image">
                <img src={category.image} alt="" />
                <span>2 Menu</span>
              </div>
              <div className="category-card__body">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
                <a href="/dashboard#food-kits">Lihat Menu</a>
              </div>
            </article>
          ))}
        </div>

        <nav className="categories-pagination" aria-label="Paginasi kategori">
          <button type="button" aria-label="Halaman sebelumnya">‹</button>
          <button className="is-current" type="button" aria-label="Halaman 1" aria-current="page">1</button>
          <button type="button" aria-label="Halaman berikutnya">›</button>
        </nav>
      </section>

      <footer className="categories-footer">
        <div className="categories-footer__grid">
          <div>
            <h2>DAPO</h2>
            <p>Membawa kehangatan masakan rumahan ke setiap dapur modern di Indonesia.</p>
          </div>
          <div>
            <h3>Menu</h3>
            <a href="/dashboard#food-kits">Semua Resep</a>
            <a href="/dashboard#food-kits">Menu Mingguan</a>
            <a href="/categories">Kategori Sehat</a>
            <a href="/membership">Paket Hadiah</a>
          </div>
          <div>
            <h3>Perusahaan</h3>
            <a href="/about-us">Tentang Kami</a>
            <a href="/about-us">Keberlanjutan</a>
            <a href="/about-us">Karir</a>
            <a href="/about-us">Kontak</a>
          </div>
          <div>
            <h3>Dapatkan Berita</h3>
            <p>Dapatkan promo menarik dan resep eksklusif setiap minggu.</p>
            <form onSubmit={(event) => event.preventDefault()}>
              <input aria-label="Email Anda" placeholder="Email Anda" type="email" />
              <button type="submit">→</button>
            </form>
          </div>
        </div>
        <div className="categories-footer__bottom">
          <p>© 2024 DAPO Food Kit Delivery. Kesegaran diantar.</p>
          <div>
            <a href="#privacy">Kebijakan Privasi</a>
            <a href="#terms">Ketentuan Layanan</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Categories;
