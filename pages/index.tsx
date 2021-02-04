import About from "../components/About/About";
import Alfie from "../components/Alfie/Alfie";
import Clock from "../components/Clock/Clock";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import Secret from "../components/Secret/Secret";

export default function Home() {
  return (
    <div className="HOME">
      <div className="master-grid-section">
        <div className="grid">
          <div className="grid-item alfie">
            <Alfie />
            <div className="overlay"></div>
          </div>
          <div className="grid-item clock">
            <Clock />
            <div className="overlay"></div>
          </div>
          <div className="grid-item projects">
            <Projects />
            <div className="overlay"></div>
          </div>
          <div className="grid-item contact">
            <Contact />
            <div className="overlay"></div>
          </div>
          <div className="grid-item secret">
            <Secret />
            <div className="overlay"></div>
          </div>
          <div className="grid-item about">
            <About />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
