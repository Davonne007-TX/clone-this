import Card from "./reuseable/Card";
import Image from "next/image";

export default function Burger() {
  return (
    <section className="flex flex-co lg:flex-row gap-12 max-w-7xl my-8 mx-auto rounded-lg shadow-xs p-4">
      <div className="w-full p-10 bg-red-600/80 flex flex-col lg:flex-row justify-center items-center gap-14">
        <Image
          src="/images/burger.jpg"
          alt="Chicken Tender Meal with Toast"
          className="rounded-2xl"
          width={600}
          height={600}
        />
        <Card
          sectionStyle="max-w-sm md:max-w-2xl flex flex-col gap-8"
          buttonText="Order Now"
          buttonStyle="bg-white text-red-600/80 text-2xl"
        >
          <h1 className="font-bold text-white text-4xl md:text-5xl leading-wide">
            Did someone say Bacon?
          </h1>
          <p className="text-2xl text-white">
            The Ultimate Bacon Burger is here! Get your juicy beef patty topped
            with crispy bacon, melted cheese, and all the fixings. It's a flavor
            explosion you won't want to miss.
          </p>

          <button className="py-2 px-4 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 bg-white text-red-600/80 font-bold text-2xl">
            See All Toppings
          </button>
        </Card>
      </div>
    </section>
  );
}
