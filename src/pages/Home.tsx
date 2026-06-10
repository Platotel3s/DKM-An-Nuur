import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import Announcement from "../components/Announcement";
import JadwalKajian from "../components/Kajian";
import QRISSection from "../components/QRISSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Announcement />
      <JadwalKajian />
      <QRISSection />
      <Footer />
    </>
  );
}
