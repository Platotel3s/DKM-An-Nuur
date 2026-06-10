import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faMicrophone,
  faQuran
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";

const khotib = [
  ["12 Juni 2026", "Ust. Agmal","Sabil"],
  ["19 Juni 2026", "Ust. Mihtahudin","Fahmi"],
  ["26 Juni 2026", "Ust. Dodi","Alfi"],
  ["03 Juli 2026", "Ust. Afif Fachrudin S.Pd.I","Sabil"],
  ["10 Juli 2026", "Ust. H. Aceng Adiputra S.Pd.I","Fahmi"],
  ["17 Juli 2026", "Ust. Muhammad Shofwan M.Pd.I","Alfi"],
  ["24 Juli 2026", "Ust. Zaenal Mutaqin","Sabil"],
  ["31 Juli 2026", "Ust. Sholihin","Fahmi"],
  ["7 Agustus 2026","Ust. Ahmad Anshori","Alfi"],
  ["14 Agustus 2026","Ust. HM Irfan Zaini S.Ag","Sabil"],
  ["21 Agustus 2026","Ust. KH. Makmun Murod","Fahmi"],
  ["28 Agustus 2026","Ust. KH. Abdul Kohar Azis","Alfi"]
];

export default function Khotib() {
  return (
    <>
      <Navbar/>
        <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            Jadwal Khotib Jumat
          </h2>
          <p className="text-gray-600 mt-3">
            Jadwal petugas khutbah Jumat Masjid Jami An Nuur
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-green-700 text-white px-6 py-4">
            <h3 className="font-bold text-xl">
              Jadwal Khutbah Jumat
            </h3>
          </div>
          <div className="h-96 overflow-y-scroll">
            <table className="w-full">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left px-6 py-4">
                    Tanggal
                  </th>
                  <th className="text-left px-6 py-4">
                    Khotib
                  </th>
                  <th className="text-left px-6 py-4">
                    Bilal
                  </th>
                </tr>
              </thead>
              <tbody>
                {khotib.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="text-green-600"
                        />
                        {item[0]}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon
                          icon={faQuran}
                          className="text-blue-600"
                        />
                        {item[1]}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon
                          icon={faMicrophone}
                          className="text-slate-600"
                        />
                        {item[2]}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
      <Footer/>
    </>
  );
}
