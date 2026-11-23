import { useState } from 'react';
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
import './food-kit-detail.css';

const productCatalog = [
  { slug: 'rendang-dapo', name: 'Rendang DAPO', price: 'Rp 135.000', rating: '4.9 (728+ Ulasan)', image: rendang },
  { slug: 'salmon-poke-bowl', name: 'Salmon Poke Bowl', price: 'Rp 60.000', rating: '4.8 (85+ Ulasan)', image: salmon },
  { slug: 'nasi-goreng-kampung', name: 'Nasi Goreng Kampung', price: 'Rp 45.000', rating: '4.7 (210+ Ulasan)', image: nasiGoreng },
  { slug: 'udang-telur-balado', name: 'Udang Telur Balado', price: 'Rp 49.000', rating: '5.0 (42+ Ulasan)', image: udang },
  { slug: 'ayam-taliwang-dapo', name: 'Ayam Taliwang DAPO', price: 'Rp 90.000', rating: '4.6 (128+ Ulasan)', image: ayamTaliwang },
  { slug: 'authentic-carbonara', name: 'Authentic Carbonara', price: 'Rp 50.000', rating: '4.9 (315+ Ulasan)', image: carbonara },
  { slug: 'ayam-katsu-kari', name: 'Ayam Katsu Kari', price: 'Rp 45.000', rating: '4.8 (142+ Ulasan)', image: ayamKatsu },
  { slug: 'gado-gado-premium', name: 'Gado-Gado Premium', price: 'Rp 42.000', rating: '4.7 (98+ Ulasan)', image: gado },
];

const cookingSteps = [
  {
    title: 'Siapkan Daging',
    text: 'Keluarkan daging sapi dari kemasan, cuci bersih, lalu tiriskan. Potong daging sapi dengan ukuran seukuran gigitan.',
  },
  {
    title: 'Haluskan Bumbu',
    text: 'Masukkan bawang merah, bawang putih, cabai merah, kemiri, jahe, lengkuas, dan bumbu instan ke dalam blender, lalu haluskan hingga berbentuk pasta.',
  },
  {
    title: 'Tumis Bumbu',
    text: 'Panaskan 3 sdm minyak dalam 5 menit, kemudian tumis bumbu halus hingga harum. Tambahkan daun jeruk, daun salam, dan serai.',
  },
  {
    title: 'Masak Daging',
    text: 'Masukkan potongan daging sapi, aduk rata, lalu tuang santan kelapa. Masak 60-90 menit sambil sesekali mengaduk hingga bumbu meresap.',
  },
  {
    title: 'Masak hingga Rendang Matang',
    text: 'Masak dengan api kecil sambil diaduk hingga kuah mengering dan minyak keluar. Sajikan dengan tambahan kelapa sangrai.',
  },
];

const ingredients = [
  { name: 'Daging Sapi', amount: '≈500g' },
  { name: 'Bumbu Rendang DAPO', amount: '1 Pak' },
  { name: 'Daun Jeruk', amount: '4 Lbr' },
  { name: 'Serai, Memarkan', amount: '2 Batang' },
  { name: 'Kelapa Sangrai', amount: '100g' },
];

function FoodKitDetail() {
  const [quantity, setQuantity] = useState(0);
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const slug = pathParts[pathParts.length - 1];
  const product = productCatalog.find((item) => item.slug === slug) ?? productCatalog[0];
  const unitPrice = Number(product.price.replace(/[^0-9]/g, ''));

  return (
    <main className="detail-page">
      <header className="detail-header">
        <a className="detail-brand" href="/dashboard" aria-label="DAPO Beranda">
          <span className="detail-brand__mark" aria-hidden="true">
            <img className="detail-brand__box" src={brandBox} alt="" />
            <img className="detail-brand__hat" src={brandHat} alt="" />
          </span>
          <span className="detail-brand__name">DAPO</span>
        </a>
        <nav className="detail-nav" aria-label="Navigasi utama">
          <a href="/dashboard">Beranda</a>
          <a className="detail-nav__active" href="/food-kits">Food Kits</a>
          <a href="/categories">Kategori</a>
          <a href="/about-us">Tentang Kami</a>
        </nav>
        <div className="detail-actions">
          <a className="detail-basket" href="#keranjang" aria-label="Keranjang belanja">
            <img src={basket} alt="" />
          </a>
          <button className="detail-avatar" type="button" aria-label="Profil pengguna">
            <img src={avatar} alt="" />
          </button>
        </div>
      </header>

      <section className="detail-main">
        <a className="detail-back" href="/food-kits" aria-label="Kembali ke katalog">‹</a>

        <div className="detail-content">
          <div className="detail-image">
            <img src={product.image} alt={product.name} />
            <span className="detail-badge">Best Seller</span>
            <span className="detail-rating">★ {product.rating}</span>
          </div>

          <article className="detail-info">
            <h1>{product.name}</h1>
            <p className="detail-description">
              {product.name === 'Rendang DAPO'
                ? 'Sajian Indonesia dengan daging sapi lembut dan bumbu rendang khas DAPO.'
                : 'Sajian khas Indonesia yang disuguhkan dengan potongan Ayam Kampung yang lembut dan bumbu khas DAPO.'}
            </p>

            <div className="detail-specs">
              <div><span>♙</span><div><small>Porsi</small><strong>3-4 Orang</strong></div></div>
              <div><span>◷</span><div><small>Waktu Masak</small><strong>{product.name === 'Rendang DAPO' ? '35 Menit' : '25 Menit'}</strong></div></div>
              <div><span>▥</span><div><small>Tingkat Kesulitan</small><strong>Sedang</strong></div></div>
            </div>

            <h2>Deskripsi Produk</h2>
            <p className="detail-copy">
              {product.name === 'Rendang DAPO'
                ? 'Nikmati rendang sapi autentik buatan rumah dengan mudah. Food Kit ini mencakup semua bahan segar yang telah dipilih untuk 3-4 porsi, lengkap dengan bumbu rendang dan takaran yang pas.'
                : 'Nikmati perpaduan memasak rendang bumbu 3 di rumah Anda. Food Kit ini mencakup semua bahan segar yang telah dipilih untuk ayam kampung 3-4 orang, lengkap dengan takaran dan bumbu Taliwang hingga membuat makanan spesial dan sempurna.'}
            </p>

            <h2 className="detail-steps-title">Langkah Memasak</h2>
            <div className="detail-steps">
              {cookingSteps.map((step, index) => (
                <article key={step.title}>
                  <span>{index + 1}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </article>
              ))}
            </div>
          </article>

          <aside className="detail-purchase">
            <h2>Harga per kit</h2>
            <strong className="detail-price">{product.price}</strong>
            <small>/ Qty</small>

            <label className="detail-quantity">
              <span>Jumlah Pesanan</span>
              <div>
                <button type="button" onClick={() => setQuantity((value) => Math.max(0, value - 1))}>−</button>
                <strong>{quantity}</strong>
                <button type="button" onClick={() => setQuantity((value) => value + 1)}>+</button>
              </div>
            </label>

            <div className="detail-subtotal"><span>Subtotal</span><strong>Rp {(unitPrice * quantity).toLocaleString('id-ID')}</strong></div>
            <button className="detail-buy" type="button">Beli Sekarang</button>
            <button className="detail-cart" type="button">
              <span aria-hidden="true">▱</span> Tambah ke Keranjang
            </button>

            <div className="detail-guarantee">
              <span aria-hidden="true">♙</span>
              <p>Bahan segar &amp; garansi pengiriman</p>
            </div>

            <h2>Daftar Bahan</h2>
            <div className="detail-ingredients">
              {ingredients.map((ingredient) => (
                <div key={ingredient.name}><span>{ingredient.name}</span><strong>{ingredient.amount}</strong></div>
              ))}
            </div>

            <h2 className="detail-compatibility-title">Tidak Termasuk dalam Pengiriman</h2>
            <div className="detail-compatibility">
              <div><span>Garam</span><span>Gula Pasir</span><span>Minyak Goreng</span></div>
              <div><strong>Kaldu bubuk (opsional)</strong><strong>Air</strong></div>
            </div>

            <h2 className="detail-tools-title">Peralatan</h2>
            <div className="detail-tools">
              <div><strong>Pisau</strong><strong>Wajan</strong><strong>Kompor</strong></div>
              <div><span>Ulekan / Blender</span><span>Talenan</span><span>Alat Panggang (opsional)</span></div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="detail-footer">
        <div className="detail-footer__grid">
          <div><h2>DAPO</h2><p>Membawa kehangatan masakan rumahan ke setiap dapur modern di Indonesia.</p></div>
          <div><h3>Menu</h3><a href="/food-kits">Semua Resep</a><a href="/food-kits">Menu Mingguan</a><a href="/categories">Kategori Sehat</a><a href="/membership">Paket Hadiah</a></div>
          <div><h3>Perusahaan</h3><a href="/about-us">Tentang Kami</a><a href="/about-us">Keberlanjutan</a><a href="/about-us">Karir</a><a href="/about-us">Kontak</a></div>
          <div><h3>Dapatkan Berita</h3><p>Dapatkan promo menarik dan resep eksklusif setiap minggu.</p><form onSubmit={(event) => event.preventDefault()}><input aria-label="Email Anda" placeholder="Email Anda" type="email" /><button type="submit">→</button></form></div>
        </div>
        <div className="detail-footer__bottom"><p>© 2024 DAPO Food Kit Delivery. Kesegaran diantar.</p><div><a href="#privacy">Kebijakan Privasi</a><a href="#terms">Ketentuan Layanan</a><a href="#faq">FAQ</a></div></div>
      </footer>
    </main>
  );
}

export default FoodKitDetail;
