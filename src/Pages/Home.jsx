import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Reviews from "../Components/Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Real Estate || Home</title>
      </Helmet>

      <Banner />
      <About />
      <Reviews />
    </div>
  );
};

export default Home;
