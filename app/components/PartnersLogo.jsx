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
      <h1 className="text-shadow text-[var(--primary-dark)] text-center font-semibold text-5xl font-dancing">
        Our Trusted Partners
      </h1>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-20">
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
