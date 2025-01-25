import { ToastContainer } from "react-toastify";
import FeaturedCarousel from "./components/Carousel";
import About from "./components/About";
import FeaturedProducts from "./components/Featured";
import Reviews from "./components/PartnersLogo";

const HomePage = () => {
  return (
    <>
      <ToastContainer />
      <FeaturedCarousel />
      <FeaturedProducts />
      <About />
      <Reviews />
    </>
  );
};

export default HomePage;
