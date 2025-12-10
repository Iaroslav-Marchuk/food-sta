import { useState } from 'react';

import AboutSection from '../../sections/AboutSection/AboutSection.jsx';
import FavoritesSection from '../../sections/FavoritesSection/FavoritesSection.jsx';
import FooterSection from '../../sections/FooterSection/FooterSection.jsx';
import HeaderSection from '../../sections/HeaderSection/HeaderSection.jsx';
import HeroSection from '../../sections/HeroSection/HeroSection.jsx';
import ReviewSection from '../../sections/ReviewSection/ReviewSection.jsx';
import SubscribeSection from '../../sections/SubscribeSection/SubscribeSection.jsx';
import ModalOverlay from '../ModalOverlay/ModalOverlay.jsx';
import OrderForm from '../OrderForm/OrderForm.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleClick = () => {
    openModal();
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <HeaderSection handleOpenModal={handleClick} />

      <HeroSection handleOpenModal={handleClick} />
      <AboutSection handleOpenModal={handleClick} />
      <FavoritesSection />
      <ReviewSection />
      <SubscribeSection />

      <FooterSection />

      <ModalOverlay isOpen={modalIsOpen} onClose={closeModal}>
        <OrderForm onClose={closeModal} />
      </ModalOverlay>
    </>
  );
}

export default App;
