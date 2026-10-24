import KartuProduk from './KartuProduk';

export default function DaftarProduk({ daftarProduk }) {
    return (
    <div className="daftar-produk-container">
        <h2>Daftar Barang Katalog</h2>
        
        {/* Conditional Rendering (5c) */}
        {daftarProduk.length === 0 ? (
            <p className="pesan-kosong">Belum ada data Produk.</p>
        ) : (
        
        <div className="grid-produk">
            {/* Render List .map() (5a) */}
            {daftarProduk.map((item) => (
                <KartuProduk key={item.id} produk={item} />
            ))}
        </div>
        )}
    </div>
    );
}