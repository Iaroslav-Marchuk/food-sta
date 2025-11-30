import Button from '../../components/Button/Button.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';

function HeaderSection() {
  return (
    <Layout className="flex items-center justify-between">
      <a href="./index.html" className="py-2.5">
        <svg className="w-16.5 h-13">
          <use href="/icons.svg#icon-logo"></use>
        </svg>
      </a>
      <div className="hidden md:flex">
        <Navigation className="flex gap-7 [&>li>a]:py-7" />
        <Button>Order Now</Button>
      </div>
      <button className="md:hidden" type="button">
        <svg className="fill-(--dark-green) hover:fill-(--yellow-main) transition-colors duration-200 h-7 w-7">
          <use href="/icons.svg#icon-menu"></use>
        </svg>
      </button>
    </Layout>
  );
}

export default HeaderSection;
