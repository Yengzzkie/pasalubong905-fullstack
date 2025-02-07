import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link href={link} >
      <button className="bg-yellow-500 hover:bg-[var(--primary)] text-white hover:text-yellow-950 font-roboto rounded-none mt-6 mx-auto py-4 px-6 lg:mx-0">
        <span className="text-shadow font-normal text-xl">
          {text}
        </span>
      </button>
    </Link>
  );
};

export default Button;
