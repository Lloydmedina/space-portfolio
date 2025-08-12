import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="projects" className="py-20 bg-black/50">
          <Projects />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}
