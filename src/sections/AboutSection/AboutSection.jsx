import Button from '../../components/Button/Button.jsx';

function AboutSection() {
  return (
    <div>
      <img src="/public/apple.jpg" width="502" height="502" alt="green apple" />
      <div>
        <h2>What’s Special About Our Offerings</h2>
        <p>
          With our platform, you can browse through a diverse selection of
          cuisines and local restaurants, and choose from a variety of dishes
          that cater to your specific taste buds.
        </p>
        <div>
          <div>
            <h3>Fasest Delivery</h3>
            <p>
              Our advanced logistics system and dedicated delivery partners
              ensure that your meals are delivered to you within 30-minutes.
            </p>
          </div>
          <div>
            <h3>Easy To Order</h3>
            <p>
              You can browse through a wide variety of cuisines and restaurants,
              select your favorite meals, and place your order in just a few
              clicks.
            </p>
          </div>
        </div>
        <Button>Order Now</Button>
      </div>
    </div>
  );
}

export default AboutSection;
