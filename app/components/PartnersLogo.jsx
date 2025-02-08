import { cn } from "@/app/lib/utils";
import Marquee from "@/app/components/ui/Marquee";
import pasalogo from "@/public/pasalogo.jpg";
import harina from "@/public/harina.png";
import hoopyah from "@/public/hoopyah.png";
import muhlach from "@/public/muhlach.png";
import goldilocks from "@/public/goldilocks.svg";

const reviews = [
  {
    img: pasalogo,
  },
  {
    img: harina,
  },
  {
    img: hoopyah,
  },
  {
    img: muhlach,
  },
  {
    img: goldilocks,
  },
  {
    img: pasalogo,
  },
];
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-32 lg:w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="z-10" src={img.src} alt="pasalubong-photo" />
      </div>
    </figure>
  );
};
const PartnersLogo = () => {
  return (
    <div className="bg-white py-12">
      <div className="flex items-center justify-center">
        <span className="bg-yellow-500 h-[2px] w-[100px] rounded-lg"></span>
        <h1 className="text-2xl font-dancing font-bold text-yellow-500 text-center text-nowrap mx-2">
          Affiliates
        </h1>
        <span className="bg-yellow-500 h-[2px] w-[100px] rounded-lg"></span>
      </div>
      <h1 className="text-zinc-600 text-center font-semibold text-4xl mt-6">
        Our Trusted Partners
      </h1>
      <p className="text-center text-zinc-500 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum vero, atque molestias deserunt eaque dicta ipsam quis tempore perferendis consequuntur.</p>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-8">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
      </div>
    </div>
  );
};
export default PartnersLogo;
