import Button from '../../components/Button/Button.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';

function FooterSection() {
  return (
    <div className="hidden">
      <nav>
        <a href="./index.html">
          <svg width="66" height="52">
            <use href="/icons.svg#icon-logo"></use>
          </svg>
        </a>
        <Navigation />
        <Button>Order Now</Button>
      </nav>
      <div>
        <span>Subscribe</span>
        <input type="text" />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}

export default FooterSection;
