export default function ThankYou() {
  return (
    <section className="bg-black/20 w-full p-2">
      <div className=" flex flex-col lg:flex-row justify-end gap-8 p-2">
        <p className="mt-4">
          © 2025 The Spot, Davonne's inspired Wendys UI Project
        </p>
        <select className="border-2 border-white/60 bg-black/40 text-white rounded-lg p-2 w-44 text-center appearance-none focus:outline-none focus:ring-2 focus:ring-white transition-all">
          <option> 🇺🇸 US - English</option>
          <option> 🇲🇽 Spanish</option>
          <option> 🇫🇷 French</option>
          <option> 🇨🇳 Madarin</option>
        </select>
      </div>
    </section>
  );
}
