import Header from "./components/Header";
import Hero from "./components/Hero";
import Exclusive from "./components/Exclusive";
import Burger from "./components/Burger";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="bg-orange-100 min-h-screen">
      <Header />
      <Hero />
      <Exclusive />
      <Burger />
      <Footer />
    </main>
  );
}
