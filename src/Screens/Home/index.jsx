import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "../Components/Footer";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Portfolio />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
