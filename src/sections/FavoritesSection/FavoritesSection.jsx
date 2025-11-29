import CardList from '../../components/CardList/CardList.jsx';
import Layout from '../../components/Layout/Layout.jsx';

function FavoritesSection() {
  return (
    <section className="mb-30">
      <Layout>
        <h2 className="font-bold text-[28px] text-center mb-5 text-(--black)">
          Some of Our Favorites
        </h2>
        <p className="text-sm text-center mb-15 text-(--black) leading-[1.43]">
          Looking for something delicious?
        </p>
        <CardList />
      </Layout>
    </section>
  );
}

export default FavoritesSection;
