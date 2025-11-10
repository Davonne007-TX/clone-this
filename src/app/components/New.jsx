import Image from "next/image";
import Card from "./reuseable/Card";

export default function New() {
  return (
    <section className="max-w-6xl mx-auto rounded-lg shadow-xs my-10 ">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
        <Image
          src="/images/tenderMeal.jpg"
          alt="Chicken Tender Meal with Toast"
          width={600}
          height={600}
        />
        <Card
          sectionStyle="max-w-xs md:max-w-lg flex flex-col gap-6 mt-2 "
          buttonText="Get $10 off Coupon"
          buttonStyle="bg-red-600/80 w-80 text-white text-2xl"
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
