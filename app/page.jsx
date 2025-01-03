import { ToastContainer } from "react-toastify";
import FeaturedCarousel from "./components/Carousel";
import About from "./components/About";
import ShuffleHero from "./components/CrewGallery";
import { ShuffleGrid } from "./components/CrewGallery";

const HomePage = () => {
  return (
    <>
      <ToastContainer />
      <FeaturedCarousel />
      <About />
    </>
  );
};

export default HomePage;
