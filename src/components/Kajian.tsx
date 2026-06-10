import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookQuran,
  faClock,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export default function Kajian() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            Jadwal Kajian Rutin
          </h2>

          <p className="text-gray-600 mt-3">
            Kajian pekanan untuk meningkatkan ilmu dan keimanan jamaah.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <div className="bg-green-700 text-white p-5">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faBookQuran} />
                <h3 className="text-2xl font-bold">
                  Kajian Malam Sabtu
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3 text-gray-700">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span>Setiap Jumat Malam</span>
              </div>
              <div className="flex items-center gap-3 mb-5 text-gray-700">
                <FontAwesomeIcon icon={faClock} />
                <span>Ba'da Maghrib</span>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-800">
                  Materi Kajian
                </p>

                <p className="text-gray-700 mt-2">
                  Kitab Tauhid, Fiqih Ibadah,
                  dan Pembahasan Akhlak Islami.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <div className="bg-blue-700 text-white p-5">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faBookQuran} />
                <h3 className="text-2xl font-bold">
                  Kajian Ahad Subuh
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3 text-gray-700">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span>Setiap Hari Ahad</span>
              </div>
              <div className="flex items-center gap-3 mb-5 text-gray-700">
                <FontAwesomeIcon icon={faClock} />
                <span>Ba'da Shubuh</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800">
                  Materi Kajian
                </p>
                <p className="text-gray-700 mt-2">
                  Tafsir Al-Qur'an,
                  Hadits Arbain, dan Tazkiyatun Nufus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
