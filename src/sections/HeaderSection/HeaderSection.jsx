import { useState } from 'react';

import Layout from '../../components/Layout/Layout.jsx';
import ModalSideBar from '../../components/ModalSideBar/ModalSideBar.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';
import MobileMenu from '../../components/MobileMenu/MobileMenu.jsx';

function HeaderSection() {
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
      <button className="hidden md:block text-sm font-medium text-(--black) bg-(--green) rounded-full px-4.5 py-1.5 md:ml-7.5">
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
