import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gambar1 from "../assets/gambar1.jpeg";
import gambar2 from "../assets/gambar2.jpeg";
import gambar3 from "../assets/gambar3.jpeg";
import gambar4 from "../assets/gambar4.jpeg";
import gambar5 from "../assets/gambar5.jpeg";
import gambar6 from "../assets/gambar6.jpeg";
import gambar7 from "../assets/gambar7.jpeg";
import gambar8 from "../assets/gambar8.jpeg";

const images = [
  gambar1,
  gambar2,
  gambar3,
  gambar4,
  gambar5,
  gambar6,
  gambar7,
  gambar8,
];

export default function HeroCarousel() {
  return (
    <section>
      <Swiper
        modules={[
          Autoplay,
          Navigation,
          Pagination,
        ]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative">

              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="
                  w-full
                  h-[250px]
                  md:h-[400px]
                  lg:h-[500px]
                  object-cover
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Teks */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">

                  <h1 className="
                    text-3xl
                    md:text-5xl
                    font-bold
                    mb-4
                  ">
                    Masjid Jami' An-Nuur
                  </h1>

                  <p className="
                    text-sm
                    md:text-lg
                    max-w-2xl
                    mx-auto
                  ">
                    Pusat Ibadah, Dakwah, Pendidikan,
                    dan Kegiatan Sosial Masyarakat
                    Sejak 4 Oktober 1979
                  </p>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
