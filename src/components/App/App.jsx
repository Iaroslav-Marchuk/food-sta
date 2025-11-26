import AboutSection from '../../sections/AboutSection/AboutSection.jsx';
import FavoritesSection from '../../sections/FavoritesSection/FavoritesSection.jsx';
import FooterSection from '../../sections/FooterSection/FooterSection.jsx';
import HeaderSection from '../../sections/HeaderSection/HeaderSection.jsx';
import HeroSection from '../../sections/HeroSection/HeroSection.jsx';
import ReviewSection from '../../sections/ReviewSection/ReviewSection.jsx';
import SubscribeSection from '../../sections/SubscribeSection/SubscribeSection.jsx';

function App() {
  return (
    <>
      <HeaderSection />

      <HeroSection />
      <AboutSection />
      <FavoritesSection />
      <ReviewSection />
      <SubscribeSection />

      <FooterSection />
    </>
  );
}

export default App;
