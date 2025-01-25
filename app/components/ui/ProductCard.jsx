"use client";
import Image from "next/image";
import pasalogo from "@/public/pasalogo.jpg";

function ProductCard() {
  return (
    <div className="py-20">
      <div className="relative flex flex-col bg-white hover:bg-[var(--primary-light)] justify-end w-[250px] min-h-[270px] border rounded-tl-2xl rounded-br-2xl p-4 mx-auto shadow-lg">
        <div className="absolute top-[-35%] left-[50%] -translate-x-1/2 h-48 w-[80%]">
          <Image
            src={pasalogo}
            alt="product image"
            width={1000}
            height={1000}
            className={`rounded-full object-cover border`}
          />
          <span className="drop-shadow flex items-center justify-center absolute top-[15%] right-[-0%] h-10 w-10 bg-zinc-700 rounded-full text-zinc-200 text-xs font-thin">
            $12
          </span>
        </div>
        <h1 className="text-xl text-center font-semibold">Product 1</h1>
        <p className="text-center mt-3 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
          accusamus?
        </p>
      </div>
    </div>
  );
}
export default ProductCard;
