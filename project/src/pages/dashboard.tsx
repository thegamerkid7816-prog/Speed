import publicHero from '../assets/dashboard/hero.png';
import publicStepOne from '../assets/dashboard/step-1.png';
import publicStepTwo from '../assets/dashboard/step-2.png';
import publicStepThree from '../assets/dashboard/step-3.png';
import loggedInHero from '../assets/dashboard/logged-in-hero.png';
import loggedInStepOne from '../assets/dashboard/logged-in-step-1.png';
import loggedInStepTwo from '../assets/dashboard/logged-in-step-2.png';
import loggedInStepThree from '../assets/dashboard/logged-in-step-3.png';
import avatar from '../assets/dashboard/avatar.png';
import basket from '../assets/dashboard/logged-in-basket.png';
import brandBox from '../assets/dashboard/brand-box.png';
import brandHat from '../assets/dashboard/brand-hat.png';
import asset01 from '../assets/dashboard/asset-01.png';
import asset02 from '../assets/dashboard/asset-02.png';
import asset03 from '../assets/dashboard/asset-03.png';
import asset04 from '../assets/dashboard/asset-04.png';
import asset10 from '../assets/dashboard/asset-10.png';
import asset11 from '../assets/dashboard/asset-11.png';
import asset12 from '../assets/dashboard/asset-12.png';
import './dashboard.css';

const menuCards = [
  { title: 'Menu Praktis', description: 'Siap dimasak dalam 30 menit', image: asset01, className: 'menu-card--practical' },
  { title: 'Menu Sehat', description: 'Rendah kalori, tinggi nutrisi.', image: asset02, className: 'menu-card--healthy' },
  { title: 'Menu Keluarga', description: '', image: asset03, className: 'menu-card--family' },
  { title: 'Menu Mahasiswa', description: '', image: asset04, className: 'menu-card--student' },
];

type DashboardProps = {
  isLoggedIn?: boolean;
};

function Dashboard({ isLoggedIn = false }: DashboardProps) {
  const hero = isLoggedIn ? loggedInHero : publicHero;
  const stepOne = isLoggedIn ? loggedInStepOne : publicStepOne;
  const stepTwo = isLoggedIn ? loggedInStepTwo : publicStepTwo;
  const stepThree = isLoggedIn ? loggedInStepThree : publicStepThree;

  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <a className="dashboard-brand" href="/dashboard" aria-label="DAPO Beranda">
          <span className="dashboard-brand__mark" aria-hidden="true">
            <img className="dashboard-brand__box" src={brandBox} alt="" />
            <img className="dashboard-brand__hat" src={brandHat} alt="" />
          </span>
          <span className="dashboard-brand__name">DAPO</span>
        </a>

        <nav className="dashboard-nav" aria-label="Navigasi utama">
          <a className="dashboard-nav__link dashboard-nav__link--active" href="/dashboard">Beranda</a>
          <a className="dashboard-nav__link" href="#food-kits">Food Kits</a>
          <a className="dashboard-nav__link" href="#kategori">Kategori</a>
          <a className="dashboard-nav__link" href="/about-us">Tentang Kami</a>
        </nav>

        {isLoggedIn ? (
          <div className="dashboard-auth-actions">
            <a className="dashboard-basket" href="#keranjang" aria-label="Keranjang belanja">
              <img src={basket} alt="" />
            </a>
            <button className="dashboard-avatar" type="button" aria-label="Profil pengguna">
              <img src={avatar} alt="" />
            </button>
          </div>
        ) : (
          <a className="dashboard-login" href="/">Masuk</a>
        )}
      </header>

      <section className="dashboard-hero">
        <img className="dashboard-hero__image" src={hero} alt="Beragam hidangan rumahan DAPO" />
        <div className="dashboard-hero__overlay" aria-hidden="true" />
        <div className="dashboard-hero__copy">
          <h1>
            <span>MASAK PRAKTIS,</span>
            <span>RASA RUMAHAN</span>
            <span>NIKMAT MAKSIMAL</span>
          </h1>
          <p>50+ resep khas Indonesia -</p>
          <p>siap dalam 30 menit!</p>
          <a href="#food-kits">Lihat Paket &amp; Harga</a>
        </div>
      </section>

      <section className="dashboard-steps" id="food-kits">
        <h2>Makan malam anti ribet, cukup 1, 2, 3</h2>
        <div className="dashboard-steps__grid">
          <article>
            <img src={stepOne} alt="Pilih menu favorit" />
            <h3>1. Pilih Menu Favoritmu</h3>
            <p>Jelajahi dan pilih dari 50+ resep pilihan chef serta berbagai bahan tambahan yang tersedia setiap minggunya.</p>
          </article>
          <article>
            <img src={stepTwo} alt="Bahan segar sampai di rumah" />
            <h3>2. Bahan Segar Sampai di Rumahmu</h3>
            <p>Bahan-bahan segar yang sudah ditakar sesuai porsi beserta panduan memasak langkah demi langkah akan diantar langsung ke rumahmu.</p>
          </article>
          <article>
            <img src={stepThree} alt="Masak dengan percaya diri" />
            <h3>3. Masak dengan Percaya Diri</h3>
            <p>Ikuti langkah-langkah yang mudah dan nikmati hidangan lezat buatan rumah tanpa rasa khawatir.</p>
          </article>
        </div>
      </section>

      <section className="dashboard-menu" id="kategori">
        <h2>Sesuaikan dengan Selera-mu</h2>
        <p>Pilih dari 50+ resep baru setiap minggu. Ganti protein, atur porsi, atau tambahkan menu siap saji—semuanya sesuai kebutuhanmu.</p>
        <div className="dashboard-menu__grid">
          {menuCards.map((card) => (
            <article className={`dashboard-menu-card ${card.className}`} key={card.title}>
              <img src={card.image} alt="" />
              <div className="dashboard-menu-card__overlay">
                {card.description && <span>Popular</span>}
                <h3>{card.title}</h3>
                {card.description && <p>{card.description}</p>}
              </div>
            </article>
          ))}
        </div>
        <a className="dashboard-menu__button" href="#food-kits">Lihat Paket &amp; Harga</a>
      </section>

      <section className="dashboard-benefits" id="tentang-kami">
        <div className="dashboard-benefits__copy">
          <h2>Kenapa Memilih Kami?</h2>
          <p className="dashboard-benefits__intro">Kami menyederhanakan cara Anda makan dengan kualitas tanpa kompromi.</p>
          <div className="dashboard-benefit">
            <div className="dashboard-benefit__icon">✓</div>
            <div><h3>Bahan sudah ditakar</h3><p>Tidak ada sisa bahan terbuang. Semua bahan datang dalam porsi yang pas untuk resep Anda.</p></div>
          </div>
          <div className="dashboard-benefit">
            <div className="dashboard-benefit__icon dashboard-benefit__icon--book">▤</div>
            <div><h3>Resep lengkap</h3><p>Panduan langkah-demi-langkah yang mudah diikuti, dirancang oleh koki profesional.</p></div>
          </div>
          <div className="dashboard-benefit">
            <div className="dashboard-benefit__icon dashboard-benefit__icon--clock">◷</div>
            <div><h3>Hemat waktu</h3><p>Lewati antrean supermarket dan waktu persiapan yang melelahkan.</p></div>
          </div>
        </div>
        <div className="dashboard-benefits__image">
          <img src={asset10} alt="Hidangan DAPO yang sudah siap" />
        </div>
      </section>

      <section className="dashboard-how">
        <h2>Masak Mode Simple</h2>
        <div className="dashboard-how__steps">
          <article><span>1</span><h3>Pilih Food Kit</h3><p>Jelajahi berbagai pilihan food kit dan temukan menu yang sesuai dengan seleramu.</p></article>
          <article><span>2</span><h3>Delivery</h3><p>Bahan-bahan segar yang telah ditakar dikirim langsung ke rumahmu.</p></article>
          <article><span>3</span><h3>Masak &amp; Enjoy</h3><p>Ikuti panduan resep langkah demi langkah dan nikmati masakan rumahan.</p></article>
        </div>
      </section>

      <section className="dashboard-membership">
        <div className="dashboard-membership__copy">
          <span>EXCLUSIVE MEMBERSHIP</span>
          <h2>Unlock Gourmet Cooking Every Single Day</h2>
          <ul>
            <li>15% discount on every food kit</li>
            <li>Priority delivery &amp; early access to seasonal menu</li>
            <li>Free signature spice blends in every box</li>
          </ul>
          <a href="/membership">Join Membership Now</a>
        </div>
        <div className="dashboard-membership__images">
          <img src={asset11} alt="Paket makanan DAPO" />
          <img src={asset12} alt="Pilihan menu DAPO" />
        </div>
      </section>

      <footer className="dashboard-footer">
        <div className="dashboard-footer__grid">
          <div>
            <h2>DAPO</h2>
            <p>Membawa kehangatan masakan rumahan ke setiap dapur modern di Indonesia.</p>
          </div>
          <div>
            <h3>Menu</h3>
            <a href="#food-kits">Semua Resep</a>
            <a href="#food-kits">Menu Mingguan</a>
            <a href="#kategori">Kategori Sehat</a>
            <a href="#membership">Paket Hadiah</a>
          </div>
          <div>
            <h3>Perusahaan</h3>
            <a href="#tentang-kami">Tentang Kami</a>
            <a href="#tentang-kami">Keberlanjutan</a>
            <a href="#tentang-kami">Karir</a>
            <a href="#tentang-kami">Kontak</a>
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
        <div className="dashboard-footer__bottom">
          <p>© 2024 DAPO Food Kit Delivery. Kesegaran diantar.</p>
          <div><a href="#privacy">Kebijakan Privasi</a><a href="#terms">Ketentuan Layanan</a><a href="#faq">FAQ</a></div>
        </div>
      </footer>
    </main>
  );
}

export default Dashboard;
