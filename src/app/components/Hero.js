import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center w-full h-screen overflow-hidden">
      <Image
        src="/images/tenders2.jpg"
        alt="Chicken tenders and fries"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute text-center px-4 py-6 rounded">
        <p className="text-5xl lg:text-7xl font-bold p-4 tracking-widest  text-white drop-shadow-lg">
          DID SOMEONE SAY...
        </p>
        <p
          className="mt-4 text-6xl lg:text-8xl bg-black p-4 tracking-wide text-red-600 drop-shadow-2xl"
          style={{ fontFamily: "var(--font-slackey)" }}
        >
          TENDERS?!
        </p>
      </div>
    </section>
  );
}
