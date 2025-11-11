import { socialMedia } from "./socialMedia";
import Image from "next/image";
import OurFooterLinks from "./OurFooterLinks";

export default function OurLinks() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:flex gap-8">
        <OurFooterLinks />
        <ul className="flex gap-4 text-white">
          {socialMedia.map((media) => (
            <li key={media.id}>
              <Image src={media.image} alt={media.alt} width={40} height={40} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
