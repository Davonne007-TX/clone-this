import Image from "next/image";
import Card from "./reuseable/Card";

export default function Robot() {
  return (
    <section className="flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <Image
          src="/images/robot.jpg"
          width={600}
          height={600}
          alt="Robot Delivery"
        />
        <Card
          sectionStyle="max-w-xs md:max-w-md flex flex-col justify-center gap-4 h-full"
          buttonText="Order Now"
          buttonStyle="text-white bg-blue-600/80 text-2xl w-80"
        >
          <div className="flex flex-col justify-center items-center  mx-auto gap-4">
            <h1 className="font-bold text-4xl leading-wide">
              You don't have to get up from the table?
            </h1>
            <p className="text-2xl">
              With our state of the art Robot technology, our iSpot Robot will
              bring you your coffee or your freshly made burger.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
