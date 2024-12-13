import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-center bg-[var(--primary)] min-h-16">
      <h1 className="text-[var(--primary-content)] font-bold mr-auto ml-10 my-auto">Pasalubong 905</h1>
      <nav className="navbar ml-auto p-4 mr-10">
        <ul className="flex">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/menu"}>
            <li>Menu</li>
          </Link>
          <Link href={"/dashboard"}>
            <li>Orders</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
