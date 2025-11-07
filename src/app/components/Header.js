"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import QuickLinks from "./QuickLinks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navBar = [
    { navLink: "Menu", id: 0 },
    { navLink: "Deals", id: 1 },
    { navLink: "History", id: 2 },
    { navLink: "Join our Team", id: 3 },
  ];

  return (
    <header className="w-full text-white">
      <div className="bg-red-600/80 w-full flex flex-col lg:flex-row justify-center gap-8 p-2 items-center">
        <Image
          src="/images/girl.png"
          width={80}
          height={80}
          alt="Gabby, girl icon by icons8"
          className="border-2 border-black rounded"
        />
        <div className="lg:flex gap-32">
          <h1
            className="text-5xl lg:text-4xl text-center font-bold tracking-widest"
            style={{ fontFamily: "var(--font-slackey)" }}
          >
            The Spot
          </h1>

          <QuickLinks />
        </div>
      </div>

      {/* Mobile Nav */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden absolute top-4 right-4 z-50 text-black cursor-pointer"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav>
        <ul className="bg-white text-black hidden lg:flex text-xl gap-20 justify-center items-center">
          {navBar.map((nav) => (
            <li
              key={nav.id}
              className="p-2 hover:underline hover:text-red-600 transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-slackey)" }}
            >
              {nav.navLink}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav>
        {menuOpen && (
          <div className="lg:hidden bg-white text-black text-center flex flex-col gap-4 py-4 shadow-lg text-xl ">
            {navBar.map((nav) => (
              <li
                key={nav.id}
                style={{ fontFamily: "var(--font-slackey)" }}
                className="cursor-pointer hover:underline transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {nav.navLink}
              </li>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
