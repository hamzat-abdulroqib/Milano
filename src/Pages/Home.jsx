import BookingsSection from "../Component/BookingSection";
import FeaturedDish from "../Component/FeaturedDish";
import Findus from "../Component/Findus";
import Footer from "../Component/Footer";
import InteriorCarousel from "../Component/InteriorCarousel";
import Menu from "../Component/Menu";
import MilaonVenueSection from "../Component/MilanoVenueSection";
// import Newsletter from "./Component/Newsletter";
import TattuSections from "../Component/TattuSections";
import TatuHero from "../Component/tatuHero";
import YinYangSection from "../Component/YinYangSection";

function Home() {
  return (
    <>
      <TatuHero />
      <YinYangSection />
      <FeaturedDish />
      <TattuSections />
      <InteriorCarousel />
      <MilaonVenueSection />
      <Menu />
      <BookingsSection />
      <Findus />
      {/* <Newsletter /> */}

      <Footer />
    </>
  );
}

export default Home;
