
"use client"
import { Button } from "@material-tailwind/react";
import Image from "next/image"
import pasalogo from "../../public/pasalogo.jpg";
import { ShuffleGrid } from "./CrewGallery";

export default function About() {
  return (
    <div className="grid grid-cols-2 lg:flex-row items-center justify-evenly h-full lg:h-screen w-screen px-10 mb-20 lg:mb-0">
      <div className="about__header--container px-10 my-8 w-screen lg:max-w-[45vw]">
        <div className="flex items-center">
          <h1 className="text-md lg:text-xl text-nowrap mr-6 tracking-wider">
            PASALUBONG905
          </h1>
          <span className="bg-[var(--primary-dark)] w-full h-1"></span>
        </div>

        <h1 className="font-garamond font-semibold text-3xl lg:text-6xl my-6">
          We are more than just a restaurant, we are{" "}
          <span className="font-bold">Family</span>.
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

        <Button className="bg-[var(--primary-dark)] hover:bg-[var(--primary)] font-roboto rounded-none mt-6 mx-auto p-2 lg:mx-0">
          <span className="text-[var(--primary-content)] font-normal">Learn More About Us</span>
        </Button>
      </div>
      <div className="relative w-full ml-4 max-w-[40vw]">
        <ShuffleGrid />
        {/* <div className="absolute -top-8 -left-8 lg:-top-12 lg:-left-12 bg-[var(--primary)] w-[20vw] h-[20vw] lg:w-32 lg:h-32 z-10"></div>
        <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 border-[var(--primary-content)] border-[8px] bg-transparent w-[20vw] h-[20vw] lg:w-32 lg:h-32"></div>
        <Image
          className="shadow-lg border z-10"
          src={pasalogo}
          alt="pasalubong-photo"
          width="300"
          height="300"
        />
        <div className="absolute -bottom-4 -right-4 bg-yellow-400 w-[50%] h-[50%] -z-10"></div> */}
      </div>
    </div>
  );
}
