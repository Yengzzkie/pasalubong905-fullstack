import ProductCard from "./ui/ProductCard";
import { Salad, Carrot, LeafyGreen } from "lucide-react";

const FeaturedProducts = () => {
  return (
    <div className="relative p-8">
      <Salad className="absolute text-5xl w-80 h-80 text-zinc-200 rotate-[35deg] left-[-2%] bottom-0 z-[-1]" />
      <Carrot className="absolute text-5xl w-80 h-80 text-zinc-200 rotate-[-90deg] right-[-2%] top-0 z-[-1]" />
      <LeafyGreen className="absolute text-5xl w-80 h-80 text-zinc-200 rotate-[90deg] right-[-10%] lg:right-[50%] top-[50%] lg:top-[-10%] z-[-1]" />
      <h1 className="text-center font-bold text-5xl font-dancing text-[var(--primary-dark)] text-shadow">Featured Products</h1>
      <div className="pt-28 flex flex-col lg:flex-row justify-evenly">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
