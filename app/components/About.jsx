
"use client"
import { Button } from "@material-tailwind/react";
import Image from "next/image"
import pasalogo from "../../public/pasalogo.jpg";

export default function About() {
  return (
    <div className="bg-[var(--primary)] grid grid-cols-1 lg:grid-cols-2 lg:flex-row items-center justify-evenly h-full lg:h-[80vh] w-screen px-8 lg:px-32 mb-20 lg:mb-0">
      <div className="about__header--container my-2 w-full lg:max-w-[40vw]">
        <div className="flex items-center">
          <h1 className="text-md lg:text-xl text-nowrap mr-6 tracking-wider">
            PASALUBONG905
          </h1>
          <span className="bg-[var(--primary-dark)] w-full h-1"></span>
        </div>

        <h1 className="font-garamond font-medium text-3xl lg:text-6xl my-6">
          We are more than just a restaurant, we are{" "}
          <span className="font-extrabold">'Family'</span>.
        </h1>

        <p className="font-roboto text-sm font-light tracking-wider lg:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque non
          molestiae cumque, corrupti, ipsam, aliquam mollitia dolores eveniet
          ullam libero exercitationem distinctio. Quo ducimus quia itaque,
          repellendus hic officiis est? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Earum, est. Facilis itaque maxime laudantium tenetur
          dolores minima earum nesciunt at optio esse? Doloremque saepe
          dignissimos neque corporis quaerat mollitia odio? Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Eos inventore placeat pariatur,
          neque in minus dignissimos molestiae sequi a voluptates! Accusantium
          odio ad amet. Praesentium dolore omnis quia alias voluptatibus.
        </p>

        <Button className="bg-[var(--primary-dark)] hover:bg-[var(--primary)] font-roboto rounded-none rounded-tl-lg rounded-br-lg mt-6 mx-auto p-2 lg:mx-0">
          <span className="text-[var(--primary-content)] font-normal">Learn More About Us</span>
        </Button>
      </div>
      <div className="relative w-full pt-4 mx-auto max-w-fit mt-20 lg:mt-0">
        {/* <ShuffleGrid /> */}
        <div className="absolute -top-8 -left-8 lg:-top-12 lg:-left-12 bg-[var(--primary-dark)] w-[20vw] h-[20vw] lg:w-32 lg:h-32 z-[999]"></div>
        <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 border-[var(--primary-content)] border-[8px] bg-transparent w-[20vw] h-[20vw] lg:w-32 lg:h-32 z-[990]"></div>
        <Image
          className="shadow-lg border z-20 relative"
          src={pasalogo}
          alt="pasalubong-photo"
          width="400"
          height="400"
        />
        <div className="absolute -bottom-4 -right-4 bg-yellow-400 w-[50%] h-[50%] z-[5]"></div>
      </div>
    </div>
  );
}
