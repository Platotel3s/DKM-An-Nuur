import qris from "../assets/qris.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faQrcode,
  faMosque,
} from "@fortawesome/free-solid-svg-icons";
export default function QRISSection() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="text-5xl text-green-700"
            />
          </div>
          <h2 className="text-4xl font-bold text-slate-800">
            Infaq & Sedekah
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Mari bersama-sama memakmurkan Masjid Jami An Nuur melalui
            infaq dan sedekah terbaik untuk mendukung kegiatan ibadah,
            dakwah, pendidikan, dan sosial kemasyarakatan.
          </p>
        </div>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon
                  icon={faMosque}
                  className="text-green-700 text-2xl"
                />
                <h3 className="text-2xl font-bold">
                  Masjid Jami An Nuur
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Setiap rupiah yang Anda infakkan akan digunakan untuk
                operasional masjid, kegiatan dakwah, kajian rutin,
                santunan sosial, serta pengembangan sarana ibadah.
              </p>
              <div className="bg-green-100 rounded-xl p-4">
                <p className="font-semibold text-green-800">
                  Cara Berdonasi
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>• Buka aplikasi e-wallet atau mobile banking.</li>
                  <li>• Scan QRIS di samping.</li>
                  <li>• Masukkan nominal sedekah.</li>
                  <li>• Konfirmasi pembayaran.</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-700 flex flex-col justify-center items-center p-10">
              <div className="flex items-center gap-3 text-white mb-6">
                <FontAwesomeIcon
                  icon={faQrcode}
                  className="text-3xl"
                />
                <h3 className="text-2xl font-bold">
                  Scan QRIS
                </h3>
              </div>
              <img
                src={qris}
                alt="QRIS Masjid Jami An Nuur"
                className="w-full max-w-xs bg-white p-3 rounded-2xl shadow-lg"
              />
              <p className="text-white text-center mt-5">
                Terima kasih atas infaq dan sedekah yang Anda berikan.
                Semoga Allah membalas dengan keberkahan yang berlipat ganda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
