import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center shadow-md">
      <Image
        src="/images/tenders.jpg"
        alt="Chicken tenders and fries"
        width={980}
        height={980}
        className="object-cover relative mt-8 rounded"
      />

      <p className="absolute top-60 rounded font-serif text-white text-4xl font-bold bg-black p-4">
        Did someone say...Tenders?
      </p>
    </section>
  );
}
