import Button from '../../components/Button/Button.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';

function HeaderSection() {
  return (
    <Layout className="flex items-center justify-between py-2.5">
      <a href="./index.html">
        <svg width="66" height="52">
          <use href="/icons.svg#icon-logo"></use>
        </svg>
      </a>
      <div className="hidden md:flex">
        <Navigation />
        <Button>Order Now</Button>
      </div>
      <button className="md:hidden" type="button">
        <svg
          className="fill-(--dark-green) hover:fill-(--yellow-main) transition-colors duration-200"
          width="28"
          height="28"
        >
          <use href="/icons.svg#icon-menu"></use>
        </svg>
      </button>
    </Layout>
  );
}

export default HeaderSection;
