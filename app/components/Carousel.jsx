"use client";

import { Carousel } from "@material-tailwind/react";

export default function GalleryWithCarousel() {
  const featured = [
    {
      src: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "All-You-Can-Eat Buffet",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1664360228209-bb15b0c5be8f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Variety of Filipino Dishes",
    },
    {
      src: "https://images.unsplash.com/photo-1688084403060-3594a4b8ff8d?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Authentic Lechon Belly",
    },
    {
      src: "https://images.unsplash.com/photo-1688084456852-a456753e2f93?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Freshly Grilled Seafoods",
    },
  ];

  return (
    <Carousel
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-2.5 cursor-pointer rounded-2xl transition-all content-[''] shadow-md ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-[#e3a008c3]"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      loop={true}
      autoplay={true}
      className="items-center h-[60vh] w-screen mt-0"
    >
      {featured.map((feature, index) => (
        <div
          key={index}
          className="relative bg-[#252525a8] items-center shadow-md h-full w-screen cursor-pointer"
        >
          <img
            src={feature.src}
            alt="random-photos"
            className="h-full w-full object-cover"
            // style={{ maxHeight: "288px" }}
          />
          <div className="bg=[#252525a8] absolute top-0 left-0 font-semibold w-full h-full">
            <div className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center gap-6 -translate-x-1/2 -translate-y-1/2 w-full">
              {/* <img
                src={feature.src}
                className="w-1/2 rounded-md top-image"
              /> */}
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-white text-lg font-garamond lg:text-6xl text-shadow">
                  {feature.title}
                </h1>
                <span className="bg-yellow-400 text-white rounded-md w-fit px-2 status-badge">
                  $9.99
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
