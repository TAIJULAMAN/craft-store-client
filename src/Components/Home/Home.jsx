import Products from "../Products/Products";
import About from "./About";
import AboutCraft from "./AboutCraft";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
    
          <Banner></Banner>
          <About></About>
          <Products></Products>
          <AboutCraft></AboutCraft>
         
        </div>
    );
};

export default Home;