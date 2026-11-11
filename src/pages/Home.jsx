import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Certifications from "./Certifications";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
