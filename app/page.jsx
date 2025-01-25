import { ToastContainer } from "react-toastify";
import FeaturedCarousel from "./components/Carousel";
import About from "./components/About";
import FeaturedProducts from "./components/Featured";
import PartnersLogo from "./components/PartnersLogo";

const HomePage = () => {
  return (
    <>
      <ToastContainer />
      <FeaturedCarousel />
      <FeaturedProducts />
      <About />
      <PartnersLogo />
    </>
  );
};

export default HomePage;
