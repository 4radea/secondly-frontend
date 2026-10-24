import { useState } from 'react';

export default function FormTambahProduk({ onTambahProduk }) {
    const [nama, setNama] = useState('');
    const [kategori, setKategori] = useState('Elektronik');
    const [harga, setHarga] = useState('');
    const [kondisi, setKondisi] = useState('Bekas - Baik');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nama || !harga) return alert('Mohon isi nama dan harga barang!');
        
    const produkBaru = {
        id: Date.now(),
        nama,
        kategori,
        harga: parseInt(harga),
        kondisi,
        status: 'Tersedia'
    };
    
    onTambahProduk(produkBaru);
    setNama('');
    setHarga('');
};

return (
<form className="form-tambah" onSubmit={handleSubmit}>
    <h2>Tambah Barang Bekas</h2>
    <div className="form-group">
        <label>Nama Barang:</label>
        <input
        type="text"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Contoh: Keyboard Mechanical"
        />
        
        </div>
        
        <div className="form-group">
        <label>Kategori:</label>
        <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
            <option value="Elektronik">Elektronik</option>
            <option value="Pakaian">Pakaian</option>
            <option value="Sepatu">Sepatu</option>
            <option value="Buku">Buku</option>
            <option value="Aksesoris">Aksesoris</option>
        </select>
    </div>

    <div className="form-group">
        <label>Harga (Rp):</label>
        <input
        type="number"
        value={harga}
        onChange={(e) => setHarga(e.target.value)}
        placeholder="450000"
        />
    </div>

    <div className="form-group">
        <label>Kondisi:</label>
        <select value={kondisi} onChange={(e) => setKondisi(e.target.value)}>
            <option value="Bekas - Seperti Baru">Bekas - Seperti Baru</option>
            <option value="Bekas - Sangat Baik">Bekas - Sangat Baik</option>
            <option value="Bekas - Baik">Bekas - Baik</option>
        </select>
    </div>
    
    <button type="submit">Tambah Produk</button>
    </form>
    );
}