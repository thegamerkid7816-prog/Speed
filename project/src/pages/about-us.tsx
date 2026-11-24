import brandBox from '../assets/dashboard/brand-box.png';
import brandHat from '../assets/dashboard/brand-hat.png';
import basket from '../assets/dashboard/logged-in-basket.png';
import avatar from '../assets/about-us/avatar.png';
import hero from '../assets/about-us/hero.png';
import illustration from '../assets/about-us/illustration.png';
import openBook from '../assets/about-us/open-book.png';
import truck from '../assets/about-us/truck.png';
import organicFood from '../assets/about-us/organic-food.png';
import './about-us.css';

const differences = [
  {
    title: 'Bahan Segar',
    description: 'Bahan dipilih setiap hari dari supplier terpercaya',
    icon: organicFood,
  },
  {
    title: 'Hemat Waktu',
    description: 'Tidak perlu belanja dan menakar bahan',
    icon: null,
  },
  {
    title: 'Resep Mudah',
    description: 'Resep langkah demi langkah yang mudah diikuti',
    icon: openBook,
  },
  {
    title: 'Pengiriman Cepat',
    description: 'Kami antar langsung ke alamatmu dengan aman',
    icon: truck,
  },
];

const impacts = [
  {
    title: 'Mengurangi Food Waste',
    description: 'Semua bahan sudah ditakar sesuai kebutuhan sehingga meminimalisirkan sisa makanan',
  },
  {
    title: 'Menghemat Waktu',
    description: 'Membantu kamu fokus pada hal-hal penting tanpa harus menghabiskan waktu belanja bahan makanan',
  },
  {
    title: 'Memudahkan Aktivitas Memasak',
    description: 'DAPO membantu proses memasak menjadi lebih praktis dengan bahan yang sudah lengkap dan siap diolah',
  },
];

function AboutUs() {
  return (
    <main className="about-page">
      <header className="about-header">
        <a className="about-brand" href="/dashboard" aria-label="DAPO Beranda">
          <span className="about-brand__mark" aria-hidden="true">
            <img className="about-brand__box" src={brandBox} alt="" />
            <img className="about-brand__hat" src={brandHat} alt="" />
          </span>
          <span className="about-brand__name">DAPO</span>
        </a>

        <nav className="about-nav" aria-label="Navigasi utama">
          <a href="/dashboard">Beranda</a>
          <a href="/food-kits">Food Kits</a>
          <a href="/categories">Kategori</a>
          <a className="about-nav__active" href="/about-us">Tentang Kami</a>
        </nav>

        <div className="about-actions">
          <a className="about-basket" href="#keranjang" aria-label="Keranjang belanja">
            <img src={basket} alt="" />
          </a>
          <button className="about-avatar" type="button" aria-label="Profil pengguna">
            <img src={avatar} alt="" />
          </button>
        </div>
      </header>

      <section className="about-hero">
        <img className="about-hero__image" src={hero} alt="Beragam hidangan DAPO" />
        <div className="about-hero__overlay" aria-hidden="true" />
        <div className="about-hero__copy">
          <h1>TENTANG DAPO</h1>
          <p>Memasak kini lebih praktis dengan Food Kit berkualitas dirancang untuk kamu yang suka masak tanpa ribet!</p>
        </div>
      </section>

      <section className="about-origin">
        <div className="about-origin__illustration">
          <img src={illustration} alt="Ilustrasi pengemasan Food Kit DAPO" />
        </div>
        <div className="about-origin__copy">
          <h2>Berawal dari Kesibukan Sehari-hari</h2>
          <span aria-hidden="true" />
          <p>
            Banyak orang ingin memasak makanan sendiri yang lebih sehat, tetapi sering terkendala
            waktu untuk berbelanja, menyiapkan bahan, dan menentukan menu. Dari permasalahan
            tersebut, DAPO hadir sebagai solusi melalui Food Kit yang praktis, lengkap, dan mudah digunakan.
          </p>
        </div>
      </section>

      <section className="about-difference">
        <h2>Apa yang Membuat DAPO Berbeda?</h2>
        <span aria-hidden="true" />
        <div className="about-difference__grid">
          {differences.map((item) => (
            <article key={item.title}>
              <div className="about-difference__icon" aria-hidden="true">
                {item.icon ? (
                  <img src={item.icon} alt="" />
                ) : (
                  <span className="about-difference__clock">◷</span>
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-impact">
        <h2>Dampak yang Ingin Kami Ciptakan</h2>
        <span aria-hidden="true" />
        <div className="about-impact__grid">
          {impacts.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="about-footer">
        <div className="about-footer__grid">
          <div>
            <h2>DAPO</h2>
            <p>Membawa kehangatan masakan rumahan ke setiap dapur modern di Indonesia.</p>
            <div className="about-footer__social">
              <span aria-label="Instagram">◎</span>
              <span aria-label="Facebook">f</span>
              <span aria-label="YouTube">▶</span>
            </div>
          </div>
          <div>
            <h3>Menu</h3>
            <a href="/dashboard#food-kits">Semua Resep</a>
            <a href="/dashboard#food-kits">Menu Mingguan</a>
            <a href="/dashboard#kategori">Kategori Sehat</a>
            <a href="/dashboard#membership">Paket Hadiah</a>
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
        <div className="about-footer__bottom">
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

export default AboutUs;
