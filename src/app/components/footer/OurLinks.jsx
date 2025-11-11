import { socialMedia } from "./socialMedia";
import Image from "next/image";

export default function OurLinks() {
  return (
    <section className="flex flex-col justify-between">
      <ul className="flex gap-4">
        {socialMedia.map((media) => (
          <li key={media.id}>
            <Image src={media.image} alt={media.alt} width={40} height={40} />
          </li>
        ))}
      </ul>
    </section>
  );
}
