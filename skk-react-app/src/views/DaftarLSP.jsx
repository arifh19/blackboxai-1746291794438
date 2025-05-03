import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const initialData = [
  {
    logo: '/foto/BP3IP.jpeg',
    name: 'LSP BP3IP JAKARTA',
    kategori: 'P1',
    asesor: 29,
    tuk: 11,
    skema: 10,
  },
  {
    logo: '/foto/petrosea.png',
    name: 'LSP PETROSEA',
    kategori: 'P2',
    asesor: 52,
    tuk: 4,
    skema: 9,
  },
  {
    logo: '/foto/translog indo.png',
    name: 'LSP Transportasi dan Logistik Indonesia',
    kategori: 'P3',
    asesor: 51,
    tuk: 72,
    skema: 53,
  },
];

const DaftarLSP = () => {
  const [filterKategori, setFilterKategori] = useState('');
  const [filterJudul, setFilterJudul] = useState('');
  const [data, setData] = useState(initialData);

  const filterData = () => {
    let filtered = initialData;

    if (filterKategori) {
      filtered = filtered.filter(item => item.kategori === filterKategori);
    }

    if (filterJudul) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(filterJudul.toLowerCase())
      );
    }

    setData(filtered);
  };

  return (
    <>
      <Navbar />
      <header className="header-banner" id="home">
        <h2>DAFTAR LEMBAGA SERTIFIKASI PROFESI (LSP)</h2>
      </header>

      <section className="filter-section">
        <select
          id="filter-kategori"
          value={filterKategori}
          onChange={(e) => setFilterKategori(e.target.value)}
        >
          <option value="">-- Semua Kategori --</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
        <input
          type="text"
          id="filter-judul"
          placeholder="Cari"
          value={filterJudul}
          onChange={(e) => setFilterJudul(e.target.value)}
        />
        <button className="search-button" onClick={filterData}>Cari</button>
      </section>

      <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        <table id="dataTable" border="1">
          <thead>
            <tr>
              <th>Logo LSP</th>
              <th>Nama LSP</th>
              <th>Kategori</th>
              <th>Data Asesor</th>
              <th>Data TUK</th>
              <th>Data Skema</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td><img src={item.logo} alt="logo" width="90" /></td>
                <td>{item.name}</td>
                <td>{item.kategori}</td>
                <td>{item.asesor}</td>
                <td>{item.tuk}</td>
                <td>{item.skema}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default DaftarLSP;
