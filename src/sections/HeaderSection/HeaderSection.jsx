import Layout from '../../components/Layout/Layout.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';

function HeaderSection() {
  return (
    <Layout className="flex items-center">
      <a href="./index.html" className="py-2.5 md:mr-auto">
        <svg className="w-16.5 h-13">
          <use href="/icons.svg#icon-logo"></use>
        </svg>
      </a>

      <Navigation className="hidden md:flex gap-7 [&>li>a]:py-7 " />
      <button className="hidden md:block text-sm font-medium text-(--black) bg-(--green) rounded-full px-4.5 py-1.5 md:ml-7.5">
        Order Now
      </button>

      <button className="ml-auto md:hidden" type="button">
        <svg className="fill-(--dark-green) hover:fill-(--yellow-main) transition-colors duration-200 h-7 w-7">
          <use href="/icons.svg#icon-menu"></use>
        </svg>
      </button>
    </Layout>
  );
}

export default HeaderSection;
