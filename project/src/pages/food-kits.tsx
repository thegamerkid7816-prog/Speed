import brandBox from '../assets/dashboard/brand-box.png';
import brandHat from '../assets/dashboard/brand-hat.png';
import basket from '../assets/dashboard/logged-in-basket.png';
import avatar from '../assets/membership/avatar.png';
import rendang from '../assets/food-kits/rendang.png';
import salmon from '../assets/food-kits/salmon.png';
import nasiGoreng from '../assets/food-kits/nasi-goreng.png';
import udang from '../assets/food-kits/udang.png';
import ayamTaliwang from '../assets/food-kits/ayam-taliwang.png';
import carbonara from '../assets/food-kits/carbonara.png';
import ayamKatsu from '../assets/food-kits/ayam-katsu.png';
import gado from '../assets/food-kits/gado.png';
import './food-kits.css';

const products = [
  { name: 'Rendang DAPO', description: 'Ayam bumbu rendang autentik Padang dengan kelapa sangrai.', rating: '4.9', reviews: '(120+)', people: '2-3 Orang', time: '25 Menit', price: 'Rp 135.000', image: rendang, badge: 'TERLARIS' },
  { name: 'Salmon Poke Bowl', description: 'Irisan salmon segar dengan alpukat dan saus wijen sangrai.', rating: '4.8', reviews: '(85+)', people: '1 Orang', time: '15 Menit', price: 'Rp 60.000', image: salmon },
  { name: 'Nasi Goreng Kampung', description: 'Daging sapi premium dengan brokoli segar serta tiram.', rating: '4.7', reviews: '(210+)', people: '2-3 Orang', time: '20 Menit', price: 'Rp 45.000', image: nasiGoreng },
  { name: 'Udang Telur Balado', description: 'Udang laut segar dalam balutan kari hijau khas Padang yang aromatik.', rating: '5.0', reviews: '(42+)', people: '2 Orang', time: '30 Menit', price: 'Rp 49.000', image: udang, badge: 'BARU' },
  { name: 'Ayam Taliwang DAPO', description: 'Kombinasi sayuran dan bumbu khas Lombok dalam bumbu rendang.', rating: '4.6', reviews: '(58+)', people: '2 Orang', time: '30 Menit', price: 'Rp 90.000', image: ayamTaliwang },
  { name: 'Authentic Carbonara', description: 'Pasta carbonara tradisional dengan saus gurih dan keju premium.', rating: '4.9', reviews: '(315+)', people: '2 Orang', time: '20 Menit', price: 'Rp 50.000', image: carbonara },
  { name: 'Ayam Katsu Kari', description: 'Daging ayam yang dimasak dengan kriuk penuh rasa kari dan lalapan pendamping.', rating: '4.8', reviews: '(142+)', people: '1 Orang', time: '25 Menit', price: 'Rp 45.000', image: ayamKatsu },
  { name: 'Gado-Gado Premium', description: 'Sayuran segar lengkap saus kacang premium khas Jakarta.', rating: '4.7', reviews: '(98+)', people: '2-3 Orang', time: '15 Menit', price: 'Rp 42.000', image: gado },
];

function FoodKits() {
  return (
    <main className="foodkits-page">
      <header className="foodkits-header">
        <a className="foodkits-brand" href="/dashboard" aria-label="DAPO Beranda">
          <span className="foodkits-brand__mark" aria-hidden="true">
            <img className="foodkits-brand__box" src={brandBox} alt="" />
            <img className="foodkits-brand__hat" src={brandHat} alt="" />
          </span>
          <span className="foodkits-brand__name">DAPO</span>
        </a>
        <nav className="foodkits-nav" aria-label="Navigasi utama">
          <a href="/dashboard">Beranda</a>
          <a className="foodkits-nav__active" href="/food-kits">Food Kits</a>
          <a href="/categories">Kategori</a>
          <a href="/about-us">Tentang Kami</a>
        </nav>
        <div className="foodkits-actions">
          <a className="foodkits-basket" href="#keranjang" aria-label="Keranjang belanja">
            <img src={basket} alt="" />
          </a>
          <button className="foodkits-avatar" type="button" aria-label="Profil pengguna">
            <img src={avatar} alt="" />
          </button>
        </div>
      </header>

      <section className="foodkits-main">
        <div className="foodkits-heading">
          <div>
            <h1>Katalog Food Kits</h1>
            <p>Bahan masakan segar pilihan, bumbu racikan chef, diantar langsung ke dapur Anda. Siap masak dalam sekejap.</p>
          </div>
          <label>
            <span>Urutkan</span>
            <select defaultValue="popular" aria-label="Urutkan Food Kit">
              <option value="popular">Terpopuler</option>
              <option value="newest">Terbaru</option>
              <option value="price-low">Harga Terendah</option>
            </select>
          </label>
        </div>

        <div className="foodkits-grid">
          {products.map((product) => (
            <article className="foodkit-card" key={product.name}>
              <div className="foodkit-card__image">
                <img src={product.image} alt={product.name} />
                {product.badge && <span className="foodkit-card__badge">{product.badge}</span>}
                <button type="button" aria-label={`Tambah ${product.name} ke keranjang`}>+</button>
              </div>
              <div className="foodkit-card__body">
                <div className="foodkit-card__rating">
                  <span aria-hidden="true">★</span>
                  <strong>{product.rating}</strong>
                  <small>{product.reviews}</small>
                </div>
                <h2>{product.name}</h2>
                <p className="foodkit-card__description">{product.description}</p>
                <div className="foodkit-card__meta">
                  <span><b>♙</b>{product.people}</span>
                  <span><b>◷</b>{product.time}</span>
                </div>
                <div className="foodkit-card__footer">
                  <strong>{product.price}</strong>
                  <a href="#detail">Lihat Detail</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <nav className="foodkits-pagination" aria-label="Paginasi Food Kits">
          <button type="button" aria-label="Halaman sebelumnya">‹</button>
          <button className="is-current" type="button" aria-label="Halaman 1" aria-current="page">1</button>
          <button type="button" aria-label="Halaman berikutnya">›</button>
        </nav>
      </section>

      <footer className="foodkits-footer">
        <div className="foodkits-footer__grid">
          <div><h2>DAPO</h2><p>Membawa kehangatan masakan rumahan ke setiap dapur modern di Indonesia.</p></div>
          <div><h3>Menu</h3><a href="/food-kits">Semua Resep</a><a href="/food-kits">Menu Mingguan</a><a href="/categories">Kategori Sehat</a><a href="/membership">Paket Hadiah</a></div>
          <div><h3>Perusahaan</h3><a href="/about-us">Tentang Kami</a><a href="/about-us">Keberlanjutan</a><a href="/about-us">Karir</a><a href="/about-us">Kontak</a></div>
          <div><h3>Dapatkan Berita</h3><p>Dapatkan promo menarik dan resep eksklusif setiap minggu.</p><form onSubmit={(event) => event.preventDefault()}><input aria-label="Email Anda" placeholder="Email Anda" type="email" /><button type="submit">→</button></form></div>
        </div>
        <div className="foodkits-footer__bottom"><p>© 2024 DAPO Food Kit Delivery. Kesegaran diantar.</p><div><a href="#privacy">Kebijakan Privasi</a><a href="#terms">Ketentuan Layanan</a><a href="#faq">FAQ</a></div></div>
      </footer>
    </main>
  );
}

export default FoodKits;
