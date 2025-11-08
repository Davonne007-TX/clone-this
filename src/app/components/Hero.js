import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      <Image
        src="/images/tenders2.jpg"
        alt="Chicken tenders and fries"
        fill
        className="w-full object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute text-center bg-black lg:mt-0 rounded-3xl max-w-xs md:max-w-2xl">
        <p className="text-4xl md:text-6xl font-bold p-2 tracking-widest  text-white drop-shadow-lg">
          DID <br />{" "}
          <span className="tracking-widest text-5xl md:text-7xl text=center">
            SOMEONE SAY
          </span>
        </p>
        <p
          className="text-5xl md:text-7xl text-center w-full tracking-wide text-red-600/80 drop-shadow-2xl"
          style={{ fontFamily: "var(--font-slackey)" }}
        >
          TENDERS?
        </p>

        <div className="bg-white text-red-600 w-full mt-4 p-4">
          <div className="flex flex-col font-bold text-4xl justify-center items-center rounded-t-none p-4">
            <div className="flex flex-col gap-4 tracking-wide">
              <p>Crunchy. Fresh. Delicious.</p>
              <p className="text-black text-xl md:text-2xl">
                Get your Chicken Tenders on! Its so good you may have to dip
                twice.
              </p>
              <button className="bg-linear-to-r from-red-500 to-red-600/80 hover:scale-105 cursor-pointer text-white rounded-full w-60 lg:w-80 p-2 text-lg md:text-2xl mx-auto">
                Order on the App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
