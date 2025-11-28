import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


export default function App() {
  return <>
    <Navbar/>
    <main className="pt-16"> {/* Add padding top to main content */}
      <Hero />
      {/* Other sections will go here */}
    </main>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
  </>
}