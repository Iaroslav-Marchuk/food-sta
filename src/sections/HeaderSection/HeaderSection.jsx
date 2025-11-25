import Button from '../../components/Button/Button.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';

function HeaderSection() {
  return (
    <nav>
      <a href="./index.html">
        <svg width="66" height="52">
          <use href="/public/icons.svg#icon-logo"></use>
        </svg>
      </a>
      <Navigation />
      <Button>Order Now</Button>
    </nav>
  );
}

export default HeaderSection;
