import Card from "./reuseable/Card";
import Image from "next/image";
import Robot from "./Robot";
import Nutrition from "./Nutrition";

export default function Burger() {
  return (
    <section className="flex flex-col justify-center items-center lg:flex-row gap-4 max-w-7xl mx-auto rounded-lg shadow-xs">
      <div className="flex flex-col">
        <div className="w-full p-8  bg-red-600/80 flex flex-col lg:flex-row justify-center items-center gap-10">
          <Image
            src="/images/burger.jpg"
            alt="Chicken Tender Meal with Toast"
            className="rounded-2xl"
            width={500}
            height={500}
          />
          <Card
            sectionStyle="max-w-xs md:max-w-sm flex flex-col gap-6"
            buttonText="Order Now"
            buttonStyle="bg-white text-red-600/80 text-2xl w-80"
          >
            <h1 className="font-bold text-white text-4xl  leading-wide">
              Did someone say Bacon?
            </h1>
            <p className="text-2xl text-white">
              The Ultimate Bacon Burger is here! Get your juicy beef patty
              topped with crispy bacon, melted cheese, and all the fixings.
            </p>
            <button className="py-2 w-80 px-4 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 bg-white text-red-600/80 font-bold text-2xl">
              See All Toppings
            </button>
          </Card>
        </div>
        <Robot />
        <Nutrition />
      </div>
    </section>
  );
}
