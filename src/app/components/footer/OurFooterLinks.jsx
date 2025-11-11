import { footerLinks } from "./footerLinks";
import { importantLinks } from "./footerLinks";

export default function OurFooterLinks() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-1 gap-4">
      <ul className="flex flex-col lg:flex-row gap-8">
        {footerLinks.map((link) => (
          <li key={link.id} className="text-xl font-bold">
            {link.name}
          </li>
        ))}
      </ul>
      <ul className="flex flex-col lg:flex-row gap-8 md:mt-0">
        {importantLinks.map((link) => (
          <li key={link.id} className="font-thin text-lg">
            {link.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
