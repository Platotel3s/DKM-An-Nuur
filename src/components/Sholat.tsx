import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


interface Jadwal{
  tanggal:string;
  subuh:string;
  dzuhur:string;
  ashar:string;
  maghrib:string;
  isya:string;
}

export default function Sholat() {
  const [jadwal, setJadwal] = useState<Jadwal|null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJadwal = async () => {
      try {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const response = await fetch(
          `https://api.myquran.com/v2/sholat/jadwal/1224/${year}/${month}/${day}`
        );
        const data = await response.json();
        setJadwal(data.data.jadwal);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJadwal();
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          Memuat jadwal sholat...
        </div>
      </section>
    );
  }

  return (
    <>
    <Navbar/>
    <section className="py-16 bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Jadwal Sholat Hari Ini
        </h2>
        <div className="text-center mb-8">
          <p className="text-green-100">
            Kel. Baktijaya • Kec. Sukmajaya • Kota Depok
          </p>
          <p className="mt-2 text-lg">
            {jadwal?.tanggal}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white text-gray-800 rounded-xl p-5 text-center shadow">
            <h3 className="font-bold">Subuh</h3>
            <p className="text-2xl mt-2">{jadwal?.subuh}</p>
          </div>
          <div className="bg-white text-gray-800 rounded-xl p-5 text-center shadow">
            <h3 className="font-bold">Dzuhur</h3>
            <p className="text-2xl mt-2">{jadwal?.dzuhur}</p>
          </div>
          <div className="bg-white text-gray-800 rounded-xl p-5 text-center shadow">
            <h3 className="font-bold">Ashar</h3>
            <p className="text-2xl mt-2">{jadwal?.ashar}</p>
          </div>
          <div className="bg-white text-gray-800 rounded-xl p-5 text-center shadow">
            <h3 className="font-bold">Maghrib</h3>
            <p className="text-2xl mt-2">{jadwal?.maghrib}</p>
          </div>
          <div className="bg-white text-gray-800 rounded-xl p-5 text-center shadow">
            <h3 className="font-bold">Isya</h3>
            <p className="text-2xl mt-2">{jadwal?.isya}</p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
