import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faBuildingColumns,
  faMosque,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="container mx-auto px-4 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Tentang */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon
                icon={faMosque}
                className="text-green-400 text-2xl"
              />

              <h3 className="text-xl font-bold">
                Masjid Jami An Nuur
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Berdiri sejak 4 Oktober 1979, Masjid Jami An Nuur
              menjadi pusat ibadah, dakwah, pendidikan,
              dan kegiatan sosial masyarakat.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Kontak
            </h3>

            <div className="space-y-3">

              <div className="flex gap-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mt-1 text-green-400"
                />

                <span className="text-gray-300">
                  Jl. Cimandiri Raya, RW.03 Blok 15,
                  Kel. Baktijaya, Kec. Sukmajaya,
                  Kota Depok
                </span>
              </div>

              <div className="flex gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-green-400"
                />

                <span>0818-0836-4773</span>
              </div>

              <div className="flex gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-green-400"
                />

                <span>
                  annuurmasjid208@gmail.com
                </span>
              </div>

            </div>
          </div>

          {/* Donasi */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Donasi & Infaq
            </h3>

            <div className="space-y-3">

              <div className="flex gap-3">
                <FontAwesomeIcon
                  icon={faBuildingColumns}
                  className="text-green-400"
                />

                <span>
                  BSI : 1990030169
                </span>
              </div>

              <p className="text-gray-300">
                Mari bersama memakmurkan masjid melalui
                infaq, sedekah, dan dukungan kegiatan dakwah.
              </p>

            </div>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700 py-4 text-center text-gray-400 text-sm">

        © {new Date().getFullYear()} Masjid Jami An Nuur.
        Seluruh Hak Cipta Dilindungi.

      </div>

    </footer>
  );
}
