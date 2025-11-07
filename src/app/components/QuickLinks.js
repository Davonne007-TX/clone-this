import Image from "next/image";

export default function QuickLinks() {
  return (
    <section className="flex gap-10">
      <div className="flex gap-4 justify-center items-center">
        <Image
          src="/images/burger2.png"
          alt="Burger icon by icons8"
          width={40}
          height={40}
        />
        <li className="list-none text-xl cursor-pointer hover:scale-105 hover:text-black font-bold">
          Rewards
        </li>
      </div>{" "}
      <div className="flex gap-4 justify-center items-center">
        <Image
          src="/images/ourLocation.png"
          alt="Location icon by icons8"
          width={40}
          height={40}
        />
        <li className="list-none text-xl cursor-pointer hover:scale-105 hover:text-black font-bold">
          Find Your Spot
        </li>
      </div>
      <div className="flex">
        <button
          className="bg-white p-2 text-red-600 rounded rounded-r-none cursor-pointer hover:scale-105"
          style={{ fontFamily: "var(--font-slackey)" }}
        >
          Order Pickup
        </button>
        <button
          className="bg-red-300 p-2 text-red-600 rounded-l-none rounded cursor-pointer hover:scale-105"
          style={{ fontFamily: "var(--font-slackey)" }}
        >
          Order Delivery
        </button>
      </div>
    </section>
  );
}
