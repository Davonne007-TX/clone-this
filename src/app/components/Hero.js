import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      <Image
        src="/images/tenders2.jpg"
        alt="Chicken tenders and fries"
        fill
        className="max-w-5xl mx-auto object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute text-center px-4 py-6 rounded">
        <p className="text-6xl font-bold p-4 tracking-widest  text-white drop-shadow-lg">
          DID <br />{" "}
          <span className="tracking-widest text-7xl text=center">
            SOMEONE SAY
          </span>
        </p>
        <p
          className="mt-4 text-7xl text-center bg-black w-full p-4 tracking-wide text-red-600 drop-shadow-2xl"
          style={{ fontFamily: "var(--font-slackey)" }}
        >
          TENDERS?!
        </p>

        <div className="bg-white text-red-600 w-full">
          <div className="flex flex-col font-bold text-4xl justify-center items-center rounded-t-none p-4">
            <div className="flex flex-col gap-2">
              <p>Crunchy. Fresh. Delicious.</p>
              <p className="text-black text-2xl">
                Get your Chicken Tenders on! Its so good you may have to dip
                twice.
              </p>
              <button className="bg-black hover:scale-105 cursor-pointer text-white rounded-full w-80 p-2 text-2xl mx-auto">
                Order on the App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
