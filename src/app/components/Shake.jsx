import Image from "next/image";

export default function Shake() {
  return (
    <section className="relative h-[70vh] md:h-[60vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/shake.jpg"
        alt="Delicious milkshake, Photo from alleksana on Pexels"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/80" />

      {/* Centered Text Content */}
      <div className="relative z-10 text-center px-6 sm:px-10">
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          style={{ fontFamily: "var(--font-slackey)" }}
        >
          The Ultimate Shake Experience
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-3xl text-gray-100">
          Sweet, creamy, and made just for you.
        </p>
        <p className="text-white mt-3 text-lg ">
          * Limited time special only for Holiday Season *
        </p>
        <button className="mt-6 px-6 py-3 cursor-pointer bg-white text-red-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-xl">
          Order Now
        </button>
      </div>
    </section>
  );
}
