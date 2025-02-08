'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import foodGroup1 from "@/public/foodgroup1.jpg";

const sizes = ['SM', 'MD', 'LG'];

function MenuCard({ props }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState(sizes[1]);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };
  
  return (
    <div className="w-full max-w-[350px] mx-auto border rounded-lg">
      <div className="dark:bg-white bg-gray-100 rounded-md p-1 lg:p-2">
        <div className="w-full h-52 relative">
          <motion.button
            className="absolute top-2 right-2 z-20 text-2xl text-white"
            onClick={handleClick}
            animate={{ scale: isActive ? 1.2 : 1 }}
            transition={{ type: 'spring', stiffness: 1000, damping: 10 }}>
            {isActive ? (
              <>
                <Heart className=" fill-white" />
              </>
            ) : (
              <>
                <Heart />
              </>
            )}
          </motion.button>
          <Image
            src={foodGroup1.src}
            alt="kaldereta"
            width={1000}
            height={1000}
            className={` h-52 w-full rounded-t-md  object-cover  `}
          />
        </div>
        <article className="text-black pt-2 ">

          <h1 className="font-semibold text-lg lg:text-2xl text-zinc-700">
            {props.name}
          </h1>

          <p className="text-xs text-zinc-500 my-1">
            {props.description}
          </p>

          <div className="py-1">
            <p className="text-xs font-bold text-zinc-600">Select Size:</p>
            <div className="flex gap-2 text-sm mt-1">
              {sizes.map((size) => (
                <motion.span
                  key={size}
                  className={`border cursor-pointer hover:bg-gray-800 hover:text-white w-8 grid place-content-center h-6 lg:h-8 rounded-md ${
                    selectedSize === size ? 'bg-gray-800 text-white' : ''
                  }`}
                  onClick={() => handleSelectSize(size)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  {size}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <span className="font-medium text-base lg:text-xl text-zinc-600">${props.price[selectedSize]}</span>
          </div>
        </article>
      </div>
    </div>
  );
}
export default MenuCard;
