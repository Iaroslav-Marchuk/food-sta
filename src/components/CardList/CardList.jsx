import Card from '../Card/Card.jsx';

function CardList() {
  return (
    <ul className="flex flex-wrap gap-5 md:gap-8">
      <li>
        <Card img={'/gamburger.jpg'} alt={'gamburger'} />
      </li>
      <li>
        <Card img={'/pasta.jpg'} alt={'Pasta'} />
      </li>
      <li>
        <Card img={'/pizza.jpg'} alt={'pizza'} />
      </li>
      <li className="hidden md:flex">
        <Card img={'/chicken.jpg'} alt={'chicken'} />
      </li>
      <li className="hidden md:flex">
        <Card img={'/salat.jpg'} alt={'salat'} />
      </li>
      <li className="hidden md:flex">
        <Card img={'/borshch.jpg'} alt={'borshch'} />
      </li>
    </ul>
  );
}

export default CardList;
