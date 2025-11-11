import { footerLinks } from "./FooterLinks";

export default function OurFooterLinks() {
  return (
    <ul className="flex flex-col lg:flex-row gap-8">
      {footerLinks.map((link) => (
        <li key={link.id} className="font-bold">
          {link.name}
        </li>
      ))}
    </ul>
  );
}
