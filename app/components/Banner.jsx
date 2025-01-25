"use client"
import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-zinc-900 flex flex-col lg:flex-row items-center justify-evenly lg:h-[80vh] w-screen">
      {/* First Section */}
      <div className="relative w-full lg:w-[50%] h-[25vh] lg:h-full">
        <p className="text-shadow absolute top-5 right-2 text-left text-2xl lg:text-4xl text-white px-6 pt-8">Some Text Here Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1536489885071-87983c3e2859?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First Section Image"
        />
      </div>

      {/* Middle Section */}
      <div className="flex flex-wrap w-full h-full">
        <div className="w-1/2">
          <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1445979323117-80453f573b71?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center w-1/2">
          <h1 className="text-center text-white text-lg lg:text-5xl text-wrap">View Full Menu</h1>
          <Link href={"/"} className="text-white tracking-wider pb-1 border-b-2 border-[var(--secondary)] mt-4 mx-auto lg:mx-0">CLICK HERE</Link>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2">
          <h1 className="text-center text-white font-garamond text-lg lg:text-5xl text-wrap">Breakfast Menu</h1>
          <Link href={"/"} className="text-white tracking-wider pb-1 border-b-2 border-[var(--secondary)] mt-4 mx-auto lg:mx-0">CLICK HERE</Link>
        </div>
        <div className="w-1/2">
          <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1658713064117-51f51ecfaf69?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>

      {/* Last Section */}
      <div className="relative w-full lg:w-[50%] h-[25vh] lg:h-full">
        <p className="text-shadow absolute bottom-5 right-2 font-garamond text-2xl lg:text-4xl text-white text-right px-6 pb-8">Some Text Here Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1534596382981-1974b10d4e1a?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Last Section Image"
        />
      </div>
    </div>
  );
}
