import { ToastContainer } from "react-toastify";
import FeaturedCarousel from "./components/Carousel";
import About from "./components/About";
import FeaturedProducts from "./components/Featured";
import PartnersLogo from "./components/PartnersLogo";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";

const HomePage = () => {
  return (
    <>
      <ToastContainer />
      {/* <FeaturedCarousel /> */}
      <Hero />
      <Welcome />
      <FeaturedProducts />
      <Menu />
      <PartnersLogo />
      {/* <Banner /> */}
    </>
  );
};

export default HomePage;
