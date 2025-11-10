import Image from "next/image";
import Card from "./reuseable/Card";

export default function New() {
  return (
    <section className="max-w-7xl p=2 mx-auto mt-10 rounded-lg shadow-xs ">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 ">
        <Image
          src="/images/tenderMeal.jpg"
          alt="Chicken Tender Meal with Toast"
          width={650}
          height={650}
        />
        <Card
          sectionStyle="max-w-sm p-2 flex flex-col gap-4 mt-2 ml-10 "
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
