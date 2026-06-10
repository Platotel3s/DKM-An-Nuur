import Navbar from "../components/Navbar";
import {
  faMosque,
  faBullseye,
  faCalendarDays,
  faBuilding,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";

export default function Profile() {
  const strukturData = {
    pembina: "Ketua RW 03 Blok 15",
    penasehat: "BAMUS RW 03 Blok 15",
    ketua: "Ir Arief Surdijanto",
    sekretaris: "Ir. MS. Syarif MT, IPM",
    bendahara: "Supriyanto",
    bidang: [
      { nama: "Dakwah & Pengkajian", orang: "Drs. Jahrudin Yusuf MM", anggota: "Sayful Yudha" },
      { nama: "Sosial Kemanusiaan", orang: "Toha", anggota: null },
      { nama: "Kepemudaan", orang: "Sayful Yudha", anggota: null },
      { nama: "Pengembangan Ekonomi Umat & IPTEK", orang: "Drs. Achmad Alfarisi", anggota: null },
      { nama: "Kesehatan, Lingkungan Hidup & Kebersihan", orang: "Mahmud", anggota: null },
      { nama: "Kominfo & Hubungan Antar Masjid", orang: "Jefri Leander", anggota: null },
      { nama: "Pendidikan", orang: "Ratih Surati", anggota: null },
      { nama: "Pengembangan Potensial Muslimah & Anak", orang: "Hj. Zubaedah", anggota: null },
    ],
  };
  const bidangPembangunan = {
    nama: "Pembangunan & Sarana Prasarana",
    penanggungJawab: strukturData.sekretaris,
    keterangan: "Dikoordinasikan oleh Sekretaris DKM",
  };
  return (
    <>
      <Navbar />
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center bg-white/15 backdrop-blur rounded-2xl p-5 mb-6 shadow-xl">
            <FontAwesomeIcon icon={faMosque} className="text-6xl" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-5 tracking-tight">
            Masjid Jami' An Nuur
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-green-50">
            Pusat ibadah, dakwah, pendidikan, dan kegiatan sosial masyarakat sejak 1979
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              <i className="fas fa-hand-peace mr-2"></i>Berdiri 1979
            </span>
            <span className="px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              <i className="fas fa-certificate mr-2"></i>46+ Tahun Berkhidmat
            </span>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-green-600 font-semibold tracking-wide uppercase text-sm">Perjalanan Panjang</span>
              <h2 className="text-4xl font-bold text-slate-800 mt-2">Sejarah Keberkahan</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-green-100 p-4 rounded-full">
                  <FontAwesomeIcon icon={faCalendarDays} className="text-3xl text-green-700" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Masjid Jami' An Nuur didirikan pada tanggal <strong className="text-green-800">4 Oktober 1979</strong> 
                    sebagai pusat kegiatan keagamaan masyarakat sekitar Blok 15, RW 03. Sejak berdirinya, masjid ini 
                    terus berkembang menjadi <strong>tempat ibadah, pendidikan Islam, kajian keilmuan, pembinaan generasi muda, 
                    dan kegiatan sosial</strong> yang memberdayakan umat. Hingga kini, masjid menjadi pusat kemakmuran 
                    dan kebanggaan warga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold uppercase tracking-wide">Arah & Tujuan</span>
            <h2 className="text-4xl font-bold text-slate-800 mt-2">Visi & Misi</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-xl border border-green-100 transition hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-green-600 p-3 rounded-xl">
                  <FontAwesomeIcon icon={faBullseye} className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-green-800">Visi</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Menjadi masjid yang makmur, menjadi pusat pembinaan umat, pendidikan Islam, 
                dan pelayanan sosial masyarakat yang berdaya saing di era modern.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-100 transition hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <i className="fas fa-list-check text-white text-xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-blue-800">Misi</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Menyelenggarakan ibadah yang khusyuk dan berkualitas.</li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Mengembangkan dakwah Islam yang rahmatan lil alamin.</li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Membina generasi muda Islam yang berakhlak mulia.</li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Menyelenggarakan kegiatan sosial & kemanusiaan.</li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Memakmurkan masjid bersama jamaah dan stakeholder.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold uppercase tracking-wide">Pengurus Inti</span>
            <h2 className="text-4xl font-bold text-slate-800 mt-2">Struktur Organisasi DKM</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Dewan Kemakmuran Masjid Jami' An Nuur periode 2024-2027</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-5 shadow-md border-l-4 border-amber-500 flex items-center gap-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <i className="fas fa-crown text-amber-700 text-xl"></i>
              </div>
              <div>
                <p className="text-sm text-amber-700 font-semibold uppercase">Pembina</p>
                <p className="text-lg font-bold text-gray-800">{strukturData.pembina}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 shadow-md border-l-4 border-blue-500 flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-gavel text-blue-700 text-xl"></i>
              </div>
              <div>
                <p className="text-sm text-blue-700 font-semibold uppercase">Penasehat</p>
                <p className="text-lg font-bold text-gray-800">{strukturData.penasehat}</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
              <div className="bg-green-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2"><FontAwesomeIcon icon={faUserTie} /> Ketua DKM</h3>
              </div>
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-user-circle text-4xl text-green-700"></i>
                </div>
                <p className="text-2xl font-bold text-gray-800">{strukturData.ketua}</p>
                <p className="text-gray-500 text-sm mt-1">Ketua Umum</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
              <div className="bg-green-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2"><i className="fas fa-pen-fancy"></i> Sekretaris</h3>
              </div>
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-file-alt text-4xl text-green-700"></i>
                </div>
                <p className="text-xl font-bold text-gray-800">{strukturData.sekretaris}</p>
                <p className="text-gray-500 text-sm mt-1">Sekretaris DKM</p>
                <span className="inline-block mt-2 text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">⚡ Merangkap Bidang Pembangunan</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
              <div className="bg-green-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2"><i className="fas fa-coins"></i> Bendahara</h3>
              </div>
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-wallet text-4xl text-green-700"></i>
                </div>
                <p className="text-2xl font-bold text-gray-800">{strukturData.bendahara}</p>
                <p className="text-gray-500 text-sm mt-1">Bendahara Umum</p>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8 mt-6">📌 Koordinator Bidang</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {strukturData.bidang.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 border-l-4 border-green-500 group">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition">
                    <i className="fas fa-bullhorn text-green-700"></i>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-800 text-lg">{item.nama}</h4>
                    <p className="text-green-700 font-semibold mt-1">{item.orang}</p>
                    {item.anggota && <p className="text-xs text-gray-500 mt-1">Anggota: {item.anggota}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl shadow-2xl overflow-hidden transform transition hover:scale-[1.01] duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="bg-amber-600 p-6 flex items-center justify-center md:w-1/3">
                  <FontAwesomeIcon icon={faBuilding} className="text-5xl text-white" />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-bold">STRUKTUR KHUSUS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">🚧 Bidang Pembangunan & Sarana Prasarana</h3>
                  <p className="text-amber-100 text-lg font-semibold">Penanggung Jawab : {bidangPembangunan.penanggungJawab}</p>
                  <p className="text-gray-200 text-sm mt-2 flex items-center gap-1"><i className="fas fa-check-circle"></i> {bidangPembangunan.keterangan} · Bertanggung jawab atas renovasi, pembangunan fasilitas, dan pemeliharaan infrastruktur masjid.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">Perencanaan</span>
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">Konstruksi</span>
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">Renovasi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-10 border-t pt-6 max-w-3xl mx-auto">
            <i className="fas fa-info-circle text-green-600 mr-1"></i> Berdasarkan SK DKM & Musyawarah RW 03 Blok 15 · Periode khidmat {new Date().getFullYear()}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
