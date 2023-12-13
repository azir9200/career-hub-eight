import Category from "../Category/Category";
import Banner from "../SharedHome/Banner/Banner";
import CategoryList from "../SharedHome/CategoryList/CategoryList";
import FeaturdJob from "../SharedHome/FeaturedJob/FeaturdJob";



const Home = () => {
  return (
    <div>

      <Banner></Banner>
      <Category></Category>
      <CategoryList></CategoryList>
      <FeaturdJob></FeaturdJob>

    </div>
  );
};

export default Home;


