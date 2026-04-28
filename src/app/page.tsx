import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
