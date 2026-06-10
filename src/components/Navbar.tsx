import { useState } from "react";
import { Link } from "react-router-dom";
import logoMasjid from "../assets/logo-masjid.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 cursor-default">
            <img
              src={logoMasjid}
              alt="Logo Masjid"
              className="w-10 h-10"
            />
            <div>
              <h1 className="font-bold text-lg">
                Masjid Jami' An-Nuur
              </h1>
            </div>
          </div>
          <div className="hidden md:flex gap-6">
            <Link
              to="/"
              className="hover:text-yellow-300 transition"
            >
              Beranda
            </Link>
            <Link
              to="/profil"
              className="hover:text-yellow-300 transition"
            >
              Profil Masjid
            </Link>
            <Link
              to="/adzan"
              className="hover:text-yellow-300 transition"
            >
              Jadwal Adzan
            </Link>
            <Link
              to="/khotib"
              className="hover:text-yellow-300 transition"
            >
              Khotib
            </Link>
            <Link
              to="/admin"
              className="hover:text-yellow-300 transition"
            >
              Admin
            </Link>
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
            />
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4 border-t border-green-700 pt-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link
                to="/profil"
                onClick={() => setIsOpen(false)}
              >
                Profil Masjid
              </Link>
              <Link
                to="/adzan"
                onClick={() => setIsOpen(false)}
              >
                Jadwal Adzan
              </Link>
              <Link
                to="/khotib"
                onClick={() => setIsOpen(false)}
              >
                Khotib
              </Link>

              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}
