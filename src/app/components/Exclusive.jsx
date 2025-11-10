import Image from "next/image";
import Shake from "./Shake";

export default function Exclusive() {
  const exclusiveItems = [
    {
      item: "Meals",
      src: "/images/burger3.jpg",
      alt: "Cheeseburger Meal, Photo by Engin Akyurt on Pexels ",
      id: 0,
    },

    {
      item: "Chicken",
      src: "/images/tenders.jpg",
      alt: "Chicken Tenders and Fries, Photo by fish socks on Pexels",
      id: 1,
    },
    {
      item: "Burgers",
      src: "/images/burger4.jpg",
      alt: "Bacon Cheeseburger, Photo by Giori Iremafze on Pexels",
      id: 2,
    },
    {
      item: "Sides",
      src: "/images/sides.jpg",
      alt: "Baked Bacon and Cheese Potato, Photo by nobleseed nobleseed on Unsplash",
      id: 3,
    },
    {
      item: "Kids Meals",
      src: "/images/happyMeal.jpg",
      alt: "Kids Happy Meal, Photo by Megan Hessler on Unsplash",
      id: 4,
    },
    {
      item: "Salads",
      src: "/images/salad.jpg",
      alt: "Cesar Salad, Photo by Cliffer Rebelo on Unsplash",
      id: 5,
    },
    {
      item: "Drinks",
      src: "/images/sodas.jpg",
      alt: "Can of mix sodas, Photo by Charlie Wollborg on Unsplash",
      id: 6,
    },
    {
      item: "Desserts",
      src: "/images/cake.jpg",
      alt: "Cheesecake, Photo by max-nayman on Unsplash",
      id: 7,
    },
  ];

  return (
    <section
      className="flex flex-wrap gap-10
    justify-center items-center mt-10 lg:mt-20
    "
    >
      {exclusiveItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-8 justify-center items-center flex=wrap"
        >
          {item.src ? (
            <>
              <Image
                src={item.src}
                alt={item.alt}
                width={160}
                height={160}
                className="rounded-2xl"
              />
              <p className="text-2xl font-bold">{item.item}</p>
            </>
          ) : (
            <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center">
              <p className="text-2xl font-bold">{item.item}</p>
            </div>
          )}
        </div>
      ))}

      <Shake />
    </section>
  );
}
