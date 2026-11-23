import brandBox from '../assets/dashboard/brand-box.png';
import brandHat from '../assets/dashboard/brand-hat.png';
import avatar from '../assets/membership/avatar.png';
import voucher from '../assets/membership/voucher.png';
import armyStar from '../assets/membership/army-star.png';
import gift from '../assets/membership/gift.png';
import done from '../assets/membership/done.png';
import './membership.css';

const benefits = [
  'Diskon hingga 20% untuk semua food kit',
  'Mendapatkan 10 poin setiap transaksi',
  'Tukar poin dengan voucher menarik',
  'Layanan pelanggan prioritas',
];

const memberBenefits = [
  {
    title: 'Diskon Spesial Member DAPO',
    description: 'Dapatkan diskon hingga 20% untuk setiap pembelian food kit pilihan',
    icon: voucher,
  },
  {
    title: 'Poin Reward Setiap Transaksi',
    description: 'Kumpulkan poin dari setiap transaksi dan tukarkan dengan voucher menarik',
    icon: armyStar,
  },
  {
    title: 'Tukar Poin Jadi Hadiah Menarik',
    description: 'Gunakan poin untuk mendapatkan hadiah menarik yang menguntungkan kamu!',
    icon: gift,
  },
  {
    title: 'Layanan Prioritas',
    description: 'Nikmati layanan pelanggan prioritas, kami siap membantu lebih cepat untuk Anda',
    icon: null,
  },
];

function Membership() {
  return (
    <main className="membership-page">
      <header className="membership-header">
        <a className="membership-brand" href="/dashboard" aria-label="DAPO Beranda">
          <span className="membership-brand__mark" aria-hidden="true">
            <img className="membership-brand__box" src={brandBox} alt="" />
            <img className="membership-brand__hat" src={brandHat} alt="" />
          </span>
          <span className="membership-brand__name">DAPO</span>
        </a>

        <nav className="membership-nav" aria-label="Navigasi utama">
          <a href="/dashboard">Beranda</a>
          <a href="/dashboard#food-kits">Food Kits</a>
          <a href="/dashboard#kategori">Kategori</a>
          <a href="/about-us">Tentang Kami</a>
        </nav>

        <button className="membership-avatar" type="button" aria-label="Profil pengguna">
          <img src={avatar} alt="" />
        </button>
      </header>

      <section className="membership-hero">
        <span className="membership-eyebrow">Berlangganan &amp; Hemat 20%</span>
        <h1>
          Masak Lebih Hemat &amp; Praktis
          <br />
          dengan Berlangganan
        </h1>
        <p>
          Pilih paket ini sesuai dengan gaya hidup Anda. Dapatkan harga lebih murah,
          <br />
          gratis ongkir, dan menu eksklusif setiap minggu.
        </p>
      </section>

      <section className="membership-content" aria-label="Pilihan keanggotaan">
        <article className="membership-benefits">
          <h2>Keuntungan Menjadi Member DAPO</h2>
          <div className="membership-benefits__list">
            {memberBenefits.map((benefit) => (
              <div className="membership-benefit" key={benefit.title}>
                <span className="membership-benefit__icon" aria-hidden="true">
                  {benefit.icon && <img src={benefit.icon} alt="" />}
                </span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="membership-plan">
          <div className="membership-plan__header">
            <h2>Paket Eksklusif</h2>
            <p>Nikmati semua keuntungan premium hanya dengan</p>
          </div>
          <div className="membership-plan__price">
            <strong>Rp30.000</strong>
            <span>/bulan</span>
          </div>
          <ul className="membership-plan__features">
            {benefits.map((benefit) => (
              <li key={benefit}>
                <span className="membership-plan__check" aria-hidden="true">
                  <img src={done} alt="" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <button type="button">Berlangganan Sekarang</button>
        </article>
      </section>

      <footer className="membership-footer">
        <div className="membership-footer__grid">
          <div>
            <h2>DAPO</h2>
            <p>Membawa kehangatan masakan rumahan ke setiap dapur modern di Indonesia.</p>
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
            <a href="/dashboard#tentang-kami">Tentang Kami</a>
            <a href="/dashboard#tentang-kami">Keberlanjutan</a>
            <a href="/dashboard#tentang-kami">Karir</a>
            <a href="/dashboard#tentang-kami">Kontak</a>
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
        <div className="membership-footer__bottom">
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

export default Membership;
