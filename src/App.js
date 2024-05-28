import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"
import Tech from "./components/Tech"
import Education from "./components/Education"
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About id='About' />
      <Tech id='Tech' />
      <Education id='Education' />
      <Projects id='Projects' />
      <Contact id='Contact' />
    </div>
  );
}

export default App;
