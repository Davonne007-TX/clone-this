import Image from "next/image";
import QuickLinks from "./QuickLinks";

export default function Header() {
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
            className="text-3xl text-center font-bold tracking-widest"
            style={{ fontFamily: "var(--font-slackey)" }}
          >
            The Spot
          </h1>

          <QuickLinks />
        </div>
      </div>

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
    </header>
  );
}
