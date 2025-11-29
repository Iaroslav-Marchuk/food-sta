import Card from '../Card/Card.jsx';

function CardList() {
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <Card img={'/gamburger.jpg'} alt={'gamburger'} />
      </li>
      <li>
        <Card img={'/pasta.jpg'} alt={'Pasta'} />
      </li>
      <li>
        <Card img={'/pizza.jpg'} alt={'pizza'} />
      </li>
      <li className="hidden">
        <Card img={'/borshch.jpg'} alt={'borshch'} />
      </li>
      <li className="hidden">
        <Card img={'/chicken.jpg'} alt={'chicken'} />
      </li>
      <li className="hidden">
        <Card img={'/salat.jpg'} alt={'salat'} />
      </li>
    </ul>
  );
}

export default CardList;
