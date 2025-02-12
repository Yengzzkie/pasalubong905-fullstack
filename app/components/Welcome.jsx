"use client";
import Image from "next/image";
import pasalogo from "../../public/pasalogo.jpg";
import Link from "next/link";
import Button from "./ui/Button";
import uberEats from "@/public/ubereats.png"
import skipTheDishes from "@/public/skipthedishes.png"
import doorDash from "@/public/doordash.png"

const boxesData = [
  {
    icon: uberEats.src,
    title: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, inventore? sit amet consectetur adipisicing elit",
    link: "https://www.ubereats.com/ca/store/pasalubong-905/qrJQk32dS7GtkBSoQ8LtUQ?srsltid=AfmBOoq2qukY3zGHIt7OesEpE6ECKvgh4OKUZGsG4O5Ftxm3LV60hALk"
  },
  {
    icon: skipTheDishes.src,
    title: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, inventore? sit amet consectetur adipisicing elit",
    link: "https://www.skipthedishes.com/pasalubong-bond"
  },
];

export default function Welcome() {
  return (
    <div className="text-black lg:flex-row items-center justify-center h-full lg:h-screen w-screen px-8 lg:px-32 lg:mb-0 py-10">
      <div className="lg:flex items-center mt-10">
        <div className="about__header--container my-2 w-full lg:max-w-[40vw]">
          <div className="flex items-center">
            <h1 className="font-dancing text-yellow-500 text-2xl text-nowrap mr-2 tracking-wider">
              About Us
            </h1>
            <span className="bg-yellow-500 w-full h-[2px]"></span>
          </div>
          <h1 className="font-bold text-zinc-600 text-3xl lg:text-5xl my-6">
            Welcome to
            <span className="font-extrabold"> Pasalubong</span>
            <span className="text-red-400">9</span>
            <span className="text-yellow-500">0</span>
            <span className="text-blue-400">5</span>.
          </h1>
          <p className="font-roboto text-zinc-500 text-sm font-light tracking-wider lg:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque non
            molestiae cumque, corrupti, ipsam, aliquam mollitia dolores eveniet
            ullam libero exercitationem distinctio. Quo ducimus quia itaque,
            repellendus hic officiis est? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Earum, est. Facilis itaque maxime laudantium
            tenetur dolores minima earum nesciunt at optio esse? Doloremque
            saepe dignissimos neque corporis quaerat mollitia odio? Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Eos inventore placeat
            pariatur, neque in minus dignissimos molestiae sequi a voluptates!
            Accusantium odio ad amet. Praesentium dolore omnis quia alias
            voluptatibus.
          </p>

          <Button text={"Learn More About Us"} link={"/about"} />
        </div>
        <div className="relative w-full pt-4 mx-auto max-w-fit mt-20 lg:mt-0">
          {/* <ShuffleGrid /> */}
          <div className="absolute -top-8 -left-8 lg:-top-12 lg:-left-12 bg-yellow-400 w-[20vw] h-[20vw] lg:w-32 lg:h-32 z-[999]"></div>
          <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 border-red-500 border-[8px] bg-transparent w-[20vw] h-[20vw] lg:w-32 lg:h-32 z-[990]"></div>
          <Image
            className="shadow-lg border z-20 relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
            src={pasalogo}
            alt="pasalubong-photo"
          />
          <div className="absolute -bottom-4 -right-4 bg-blue-700 w-[50%] h-[50%] z-[5]"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 justify-evenly mt-20">
        {boxesData.map((data, index) => (
          <div
            key={index}
            className="flex hover:bg-yellow-200/80 items-center justify-center gap-2 p-4 shadow-sm border w-full h-[300px]"
          >
            <Link href={data.link} target="_blank"><img src={data.icon} className="h-auto w-full" /></Link>
            {/* <h1 className="font-bold">{data.title}</h1> */}
            {/* <p>{data.text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
