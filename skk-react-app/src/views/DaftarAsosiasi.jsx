import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const initialData = [
  {
    logo: '/foto/logo masyarakat transportasi indonesia.png',
    name: 'MASYARAKAT TRANSPORTASI INDONESIA',
    matra: 'DARAT DAN PERKERETAAPIAN',
    alamat: 'JB Tower Lantai 10. Jalan Kebon Sirih No.48-50, Gambir, Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110',
  },
  {
    logo: '/foto/logo kesatuan pelaut indonesia.png',
    name: 'KESATUAN PELAUT INDONESIA',
    matra: 'LAUT',
    alamat: 'Jl. Cikini Raya 58 AA/BB, Jakarta - Indonesia',
  },
  {
    logo: '/foto/logo asosiasi pilot helikopter indonesia.jpg',
    name: 'ASOSIASI PILOT HELIKOPTER INDONESIA',
    matra: 'UDARA',
    alamat: 'Jl. TB Simatupang No.1A, RT.12/RW.8, Jati Padang, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12540',
  },
];

const DaftarAsosiasi = () => {
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
        <h2>DAFTAR ASOSIASI</h2>
      </header>

      <section className="filter-section">
        <select
          id="filter-matra"
          value={filterMatra}
          onChange={(e) => setFilterMatra(e.target.value)}
        >
          <option value="">-- Matra --</option>
          <option value="Darat dan Perkeretaapian">Darat dan Perkeretaapian</option>
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
              <th>Logo Asosiasi</th>
              <th>Nama Asosiasi</th>
              <th>MATRA</th>
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

export default DaftarAsosiasi;
