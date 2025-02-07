"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavItem({ label, href }) {
  return (
    <a href={href}>
      <Typography
        as="li"
        className="text-zinc-100 p-1 font-medium"
      >
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="Home" href="/" />
      <NavItem label="Menu" href="/menu" />
      <NavItem label="About Us" href="/about" />
      <NavItem label="Admin Dashboard" href="/dashboard" />
    </ul>
  );
}

export function Navigation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar color="transparent" className="absolute" fullWidth>
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer text-lg font-bold text-[var(--primary-content)] drop-shadow-md"
        >
          <span className="text-zinc-200">Pasalubong</span>
          <span className="text-red-400">9</span>
          <span className="text-yellow-500">0</span>
          <span className="text-blue-400">5</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Button className="hidden lg:inline-block bg-[var(--primary-dark)] text-[var(--primary-content)] p-2 rounded-md">
          Sign in
        </Button>
        <IconButton
          size="sm"
          variant="text"
          onClick={handleOpen}
          className="h-6 w-6 ml-auto inline-block text-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl py-2 ">
          <NavList />
          <Button className="mb-2 " fullWidth>
            Sign in
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
