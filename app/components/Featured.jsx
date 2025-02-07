import ProductCard from "./ui/ProductCard";
import vegetables from "@/public/vegetables.jpeg"
import foodBowl from "@/public/foodbowl.png";
import kaldereta from "@/public/kaldereta.png";

const productData = [
  {
    img: foodBowl.src,
    title: "Dinner Platter",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora rem cupiditate illum repellendus vitae cum a? Voluptas, dignissimos quia.",
    price: "24.99"
  },
  {
    img: kaldereta.src,
    title: "Kaldereta",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora rem cupiditate illum repellendus vitae cum a? Voluptas, dignissimos quia.",
    price: "6.99"
  },
  {
    img: foodBowl.src,
    title: "Seafood Platter",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora rem cupiditate illum repellendus vitae cum a? Voluptas, dignissimos quia.",
    price: "24.99"
  }
]

const FeaturedProducts = () => {
  return (
    <div className="relative bg-center bg-cover overflow-hidden"
    style={{ backgroundImage: `url(${vegetables.src})` }} >
      <div className="h-full w-full bg-zinc-900/90 p-10">
        <h1 className="text-center font-bold text-4xl lg:text-5xl text-zinc-100 text-shadow lg:mt-16">Featured Products</h1>
        <div className="pt-16 lg:pt-28 flex flex-col lg:flex-row justify-evenly">
          {productData.map((product) => (
            <ProductCard key={product.title} props={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
