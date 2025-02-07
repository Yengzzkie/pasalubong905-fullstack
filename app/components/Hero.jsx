import storeFront from "@/public/store.jpg";
import foodBowl from "@/public/foodbowl.png";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div
      className="h-full lg:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${storeFront.src})` }}
    >
      {/* Overlay */}
      <div className="h-full w-full bg-zinc-900/85 flex items-center justify-center p-1 py-20 lg:p-10">
        <div className="lg:flex items-center justify-evenly h-full w-full p-8">
          <div className="text-slide-in flex-1">
            <h1 className="text-white text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
              Enjoy our authentic
            </h1>
            <h1 className="text-white text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
              Filipino Dishes
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo est
              consequuntur voluptate, dolorem doloremque, dolorum facilis neque
              nobis amet, libero odio eum! Cupiditate, autem architecto. Aut
              blanditiis repellendus laborum voluptate est doloribus, rerum odio
              facere nulla, repudiandae provident ab perspiciatis maiores! Magni
              et similique, incidunt nihil sed quis dolores placeat!
            </p>
            <Button link={"/menu"} text={"Explore Our Menu"} />
          </div>

          <div className="flex-1 p-8">
            <img
            loading="lazy"
              src={foodBowl.src}
              alt="food-bowl"
              className="spin360 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
