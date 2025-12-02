import CardList from '../../components/CardList/CardList.jsx';
import Layout from '../../components/Layout/Layout.jsx';

function FavoritesSection() {
  return (
    <section className="mb-30 md:mb-40">
      <Layout>
        <h2 className="font-bold text-[28px] text-center mb-5 text-(--black) md:text-[42px]">
          Some of Our Favorites
        </h2>
        <p className="text-sm text-center mb-15 text-(--black) leading-[1.43] md:text-base">
          Looking for something delicious?
        </p>
        <CardList />
      </Layout>
    </section>
  );
}

export default FavoritesSection;
