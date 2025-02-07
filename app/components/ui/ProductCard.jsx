"use client";
import Image from "next/image";

function ProductCard({props}) {
  return (
    <div className="py-20">
      <div className="relative flex flex-col bg-white hover:bg-yellow-100 justify-end w-[250px] min-h-[270px] border rounded-tl-2xl rounded-br-2xl p-4 mx-auto shadow-lg">
        <div className="absolute top-[-35%] left-[50%] -translate-x-1/2 h-48 w-[80%]">
          <Image
            src={props.img}
            alt="product image"
            width={1000}
            height={1000}
            className={`rounded-full object-cover`}
          />
          <span className="drop-shadow flex items-center justify-center absolute top-[15%] right-[-0%] h-10 w-10 bg-zinc-300 rounded-full text-zinc-800 text-xs font-thin">
            ${props.price}
          </span>
        </div>
        <h1 className="text-2xl text-zinc-800 text-center font-semibold">{props.title}</h1>
        <p className="text-center text-zinc-600 mt-3 text-sm">
          {props.description}
        </p>
      </div>
    </div>
  );
}
export default ProductCard;
