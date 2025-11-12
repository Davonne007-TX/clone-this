import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      <Image
        src="/images/tenders2.jpg"
        alt="Chicken tenders and fries"
        fill
        className="object-cover object-center brightness-75"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/80"></div>

      <div className="relative z-10 text-center backdrop-blur-sm p-8 rounded-3xl  max-w-md md:max-w-2xl border border-white/10 mt-20 md:mt-0 ">
        <p className="text-4xl md:text-6xl font-extrabold text-white tracking-widest drop-shadow-lg leading-snug">
          DID <br />
          <span className="text-5xl md:text-7xl block text-red-500">
            SOMEONE SAY
          </span>
        </p>

        <p
          className="text-6xl md:text-8xl mt-4 text-red-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
          style={{ fontFamily: "var(--font-slackey)" }}
        >
          TENDERS?
        </p>

        <div className="mt-10 bg-neutral-100/95 text-red-600 rounded-2xl shadow-lg p-6 m-4 md:m-0">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-3xl font-bold">Crunchy. Fresh. Delicious.</p>
            <p className="text-black text-lg md:text-2xl font-medium">
              Get your Chicken Tenders on! It’s so good you might have to dip
              twice.
            </p>
            <button className="mt-4 bg-linear-to-r hover:scale-105 cursor-pointer  from-red-500 to-red-600 text-white rounded-full px-8 py-3 text-lg md:text-2xl font-semibold shadow-md hover:shadow-xl transition-all">
              Order on the App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
