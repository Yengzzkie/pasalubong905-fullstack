
"use client"
import { Button } from "@material-tailwind/react";
import Image from "next/image"
import pasalogo from "../../public/pasalogo.jpg";
import { ShuffleGrid } from "./CrewGallery";

export default function About() {
  return (
    <div className="bg-zinc-800 grid grid-cols-1 lg:grid-cols-2 lg:flex-row items-center justify-evenly h-full lg:h-[80vh] w-screen px-8 lg:px-32 lg:mb-0 py-10">
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
      </div>
      
      <ShuffleGrid />
    </div>
  );
}
