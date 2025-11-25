import Button from '../../components/Button/Button.jsx';
import MainPic from '../../components/MainPic/MainPic.jsx';

function HeroSection() {
  return (
    <div>
      <div>
        <h1>Enjoy Your Favorite Food From Anywhere</h1>
        <p>
          With just a few clicks, you can have your favorite meals delivered
          straight to your doorstep, no matter where you are. Order now and
          enjoy a hassle-free and delicious meal from the comfort of your own
          home.
        </p>
      </div>
      <MainPic />
      <Button>Order now</Button>
    </div>
  );
}

export default HeroSection;
