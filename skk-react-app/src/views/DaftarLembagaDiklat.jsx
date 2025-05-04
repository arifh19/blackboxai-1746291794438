import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const initialData = [
  {
    logo: '/foto/logo stip.png',
    name: 'SEKOLAH TINGGI ILMU PELAYARAN',
    matra: 'LAUT',
    alamat: 'Jalan Marunda Makmur (Jalan Marunda Makmur), Jakarta Utara, Jakarta 14150, Indonesia',
  },
  {
    logo: '/foto/Logo Hino.png',
    name: 'PT. HINO MOTORS SALES INDONESIA',
    matra: 'DARAT',
    alamat: 'Jl. Gatot Subroto Km. 8, 5, Manis Jaya, Jatiuwung, Kota Tangerang, Banten 15111, Indonesia',
  },
  {
    logo: '/foto/logo aviation school.jpeg',
    name: 'INDONESIA AVIATION SCHOOL',
    matra: 'UDARA',
    alamat: 'Wisma Aldiron, lt 013, Jl. Gatot Subroto No.Kav 72, RT.1/RW.4, Pancoran, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Daerah Khusus Ibukota Jakarta, 12780',
  },
];

const DaftarLembagaDiklat = () => {
  const [filterMatra, setFilterMatra] = useState('');
  const [filterJudul, setFilterJudul] = useState('');
  const [data, setData] = useState(initialData);

  const filterData = () => {
    let filtered = initialData;

    if (filterMatra) {
      filtered = filtered.filter(item => item.matra === filterMatra);
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
        <h2>DAFTAR LEMBAGA DIKLAT</h2>
      </header>

      <section className="filter-section">
        <select
          id="filter-matra"
          value={filterMatra}
          onChange={(e) => setFilterMatra(e.target.value)}
        >
          <option value="">-- Semua Kategori --</option>
          <option value="Darat">Darat</option>
          <option value="Laut">Laut</option>
          <option value="Udara">Udara</option>
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
              <th>Logo Lembaga Diklat</th>
              <th>Nama Lembaga Diklat</th>
              <th>Matra</th>
              <th>Alamat</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td><img src={item.logo} alt="logo" width="90" /></td>
                <td>{item.name}</td>
                <td>{item.matra}</td>
                <td>{item.alamat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default DaftarLembagaDiklat;
