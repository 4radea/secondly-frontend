import { useState } from 'react';
import Header from './components/Header';
import Ringkasan from './components/Ringkasan';
import FormTambahProduk from './components/FormTambahProduk';
import DaftarProduk from './components/DaftarProduk';
import './App.css';

export default function App() {
  // State menyimpan daftar produk (5a)
  const [daftarProduk, setDaftarProduk] = useState([
    { id: 1, nama: 'Laptop Bekas', kategori: 'Elektronik', harga: 3500000, kondisi: 'Bekas - Sangat Baik', status: 'Tersedia' },
    { id: 2, nama: 'Sepatu Sneakers', kategori: 'Sepatu', harga: 250000, kondisi: 'Bekas - Baik', status: 'Tersedia' },
    { id: 3, nama: 'Buku Pemrograman', kategori: 'Buku', harga: 75000, kondisi: 'Bekas - Baik', status: 'Tersedia' }
  ]);

  const handleTambahProduk = (produkBaru) => {
    setDaftarProduk([produkBaru, ...daftarProduk]);
  };

  const totalTersedia = daftarProduk.filter(p => p.status === 'Tersedia').length;

  return (
    <div className="app-container">
      <Header />
      <Ringkasan totalProduk={daftarProduk.length} totalTersedia={totalTersedia} />
      
      <div className="main-content">
        <FormTambahProduk onTambahProduk={handleTambahProduk} />
        <DaftarProduk daftarProduk={daftarProduk} />
      </div>
    </div>
  );
}