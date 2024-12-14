import { ToastContainer } from "react-toastify";
import FeaturedCarousel from "./components/Carousel";
import About from "./components/About";

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
