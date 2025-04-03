import "./App.css";
import Hero from "./components/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
