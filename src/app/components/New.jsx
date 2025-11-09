import Image from "next/image";
import Card from "./reuseable/Card";

export default function New() {
  return (
    <section className="mt-20 max-w-6xl bg-white mx-auto p-8 rounded-lg shadow-lg ">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
        <Image
          src="/images/tenderMeal.jpg"
          alt="Chicken Tender Meal with Toast"
          className="mx-auto"
          width={600}
          height={600}
        />
        <Card
          sectionStyle="max=w=sm md:max-w-lg flex flex-col gap-8"
          buttonText="Get $10 off Coupon"
          buttonStyle="bg-red-600/80 text-white text-2xl"
        >
          <h1 className="font-bold text-4xl leading-wide">
            New to The Spot? Try our new Chicken Tender Meal!
          </h1>
          <p className="text-2xl">
            The Classic Favorite is back! Get your crispy juicy chicken tenders
            with a side of our signature fries and a warm toasted Texas Toast.
            Get yours today!
          </p>
        </Card>
      </div>
    </section>
  );
}
