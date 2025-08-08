import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
