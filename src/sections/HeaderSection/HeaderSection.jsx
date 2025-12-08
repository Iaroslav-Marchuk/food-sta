import { useState } from 'react';

import Layout from '../../components/Layout/Layout.jsx';
import ModalSideBar from '../../components/ModalSideBar/ModalSideBar.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';
import MobileMenu from '../../components/MobileMenu/MobileMenu.jsx';

function HeaderSection({ handleOpenModal }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const openMobileMenu = () => setMobileMenuIsOpen(true);
  const closeMobileMenu = () => {
    setMobileMenuIsOpen(false);
  };

  const handleClick = () => {
    openMobileMenu();
  };

  return (
    <Layout className="flex items-center">
      <a href="./index.html" className="py-2.5 md:mr-auto">
        <svg className="w-16.5 h-13">
          <use href="/icons.svg#icon-logo"></use>
        </svg>
      </a>

      <Navigation className="hidden md:flex text-sm gap-7 [&>li>a]:py-7" />
      <button
        onClick={handleOpenModal}
        className="hidden md:block text-sm font-medium text-(--black) bg-(--green) rounded-full px-4.5 py-1.5
      md:ml-7.5

      transition-colors duration-300
      active:bg-(--yellow-main) active:shadow-lg
      xl:hover:bg-(--yellow-main) xl:hover:shadow-lg"
      >
        Order Now
      </button>

      <button className="ml-auto md:hidden" type="button" onClick={handleClick}>
        <svg className="fill-(--dark-green) hover:fill-(--yellow-main) transition-colors duration-200 h-7 w-7">
          <use href="/icons.svg#icon-menu"></use>
        </svg>
      </button>

      <ModalSideBar isOpen={mobileMenuIsOpen} onClose={closeMobileMenu}>
        <MobileMenu onClose={closeMobileMenu} />
      </ModalSideBar>
    </Layout>
  );
}

export default HeaderSection;
