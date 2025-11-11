import Image from "next/image";
import Card from "./reuseable/Card";

export default function Nutrition() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-20 lg:mt-0">
      <div className="flex flex-col md:flex-row justify-center items-center gap-14">
        <Card
          sectionStyle="max-w-xs md:max-w-md flex flex-col justify-center items center gap-4 h-full"
          buttonText="View Full Menu"
          buttonStyle="text-white bg-blue-600/80 text-2xl w-80 mt-2"
        >
          <div className="flex flex-col justify-center items-center  mx-auto gap-4">
            <h1 className="font-bold text-4xl leading-wide">
              Nutrition Information at The Spot
            </h1>
            <p className="text-2xl">
              Get your information about our menu when it comes to allergens,
              calories, ingredients and more.
            </p>
          </div>
        </Card>
        <Image
          src="/images/fruit.jpg"
          width={600}
          height={600}
          alt="Veggies, fruits, and nuts. Photo by sundaraprakash r on Unsplash"
        />
      </div>
    </section>
  );
}
