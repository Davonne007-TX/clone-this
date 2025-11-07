import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center shadow-md">
      <Image
        src="/images/tenders.jpg"
        alt="Chicken tenders and fries"
        width={960}
        height={960}
        className="object-cover mt-8 rounded"
      />
    </section>
  );
}
