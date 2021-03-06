import React from "react";
import About from "../components/About/About";
import Alfie from "../components/Alfie/Alfie";
import Clock from "../components/Clock/Clock";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import Secret from "../components/Secret/Secret";
import { ThemeType, ProjectThemeType } from "../utilities/MyTypes";

interface State {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

export default class Home extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = { theme: "normal", projectsTheme: "none" };
  }

  setTheme = (theme: ThemeType) => {
    this.setState({ theme: theme });
  };

  setProjectsTheme = (theme: ProjectThemeType) => {
    this.setState({ projectsTheme: theme });
  };

  render() {
    return (
      <div className="HOME">
        <div className="master-grid-section">
          <div className="grid">
            <div
              className="grid-item alfie"
              onMouseEnter={() => this.setTheme("alfie")}
            >
              <Alfie />
              <div className="overlay"></div>
            </div>
            <div
              className="grid-item clock"
              onMouseEnter={() => this.setTheme("clock")}
            >
              <Clock />
              <div className="overlay"></div>
            </div>
            <div
              className="grid-item projects"
              onMouseEnter={() => this.setTheme("projects")}
            >
              <Projects
                theme={this.state.theme}
                setProjectsTheme={this.setProjectsTheme}
                setTheme={this.setTheme}
              />
              <div className="overlay"></div>
            </div>
            <div
              className="grid-item contact"
              onMouseEnter={() => this.setTheme("contact")}
            >
              <Contact />
              <div className="overlay"></div>
            </div>
            <div
              className="grid-item secret"
              onMouseEnter={() => this.setTheme("secret")}
            >
              <Secret />
              <div className="overlay"></div>
            </div>
            <div
              className="grid-item about"
              onMouseEnter={() => this.setTheme("about")}
            >
              <About /> {this.state.theme} + {this.state.projectsTheme}
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
