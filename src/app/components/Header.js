import Image from "next/image";

export default function Header() {
  const navBar = [
    { navLink: "Menu", id: 0 },
    { navLink: "Deals", id: 1 },
    { navLink: "History", id: 2 },
    { navLink: "Join our Team", id: 3 },
  ];

  return (
    <header className="w-full text-white">
      <div className="bg-red-600/80 w-full flex justify-between p-2 items-center">
        <Image
          src="/images/girl.png"
          width={80}
          height={80}
          alt="Gabby, girl icon by icons8"
          className="border-2 border-black rounded"
        />
        <h1 className="text-3xl" style={{ fontFamily: "var(--font-slackey)" }}>
          The Spot
        </h1>
      </div>

      <nav>
        <ul className="bg-white text-black flex text-xl gap-20 justify-center items-center">
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
