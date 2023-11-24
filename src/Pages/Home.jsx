import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import About from "../Components/About";




const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Real Estate || Home</title>
        </Helmet>

        <Banner />
        <About />
        
      </div>
    );
};

export default Home;