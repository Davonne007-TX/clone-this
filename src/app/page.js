import Exclusive from "./components/Exclusive";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-orange-100 min-h-screen">
      <Header />
      <Hero />
      <Exclusive />
    </main>
  );
}
