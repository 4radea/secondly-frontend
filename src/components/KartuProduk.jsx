export default function KartuProduk({ produk }) {
    return (
    <div className="kartu-produk">
        <span className="badge-kategori">{produk.kategori}</span>
        <h3>{produk.nama}</h3>
        <p className="kondisi">{produk.kondisi}</p>
        <p className="harga">Rp {produk.harga.toLocaleString('id-ID')}</p>
        <span className={`status ${produk.status === 'Tersedia' ? 'tersedia' : 'terjual'}`}>
            {produk.status}
        </span>
    </div>
    );
}