import React from "react";
import About from "../components/About/About";
import Alfie from "../components/Alfie/Alfie";
import Clock from "../components/Clock/Clock";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import Secret from "../components/Secret/Secret";
import { ThemeType } from "../utilities/MyTypes";

export default class Home extends React.Component<{}, { theme: ThemeType }> {
  constructor(props: {}) {
    super(props);

    this.state = { theme: "normal" };
  }

  changeThemeHandler = (theme: ThemeType) => {
    this.setState({ theme: theme });
    console.log(theme);
  };

  render() {
    return (
      <div className="HOME">
        <div className="master-grid-section">
          <div className="grid">
            <div
              className="grid-item alfie"
              onMouseEnter={() => this.changeThemeHandler("alfie")}
            >
              <Alfie />
              <div className="overlay"></div>
            </div>
            <div
              className="grid-item clock"
              onMouseEnter={() => this.changeThemeHandler("clock")}
            >
              <Clock />
              <div className="overlay"></div>
            </div>
            <div
              className="grid-item projects"
              onMouseEnter={() => this.changeThemeHandler("projects")}
            >
              <Projects theme={this.state.theme} />
              <div className="overlay"></div>
            </div>
            <div
              className="grid-item contact"
              onMouseEnter={() => this.changeThemeHandler("contact")}
            >
              <Contact />
              <div className="overlay"></div>
            </div>
            <div
              className="grid-item secret"
              onMouseEnter={() => this.changeThemeHandler("secret")}
            >
              <Secret />
              <div className="overlay"></div>
            </div>
            <div
              className="grid-item about"
              onMouseEnter={() => this.changeThemeHandler("about")}
            >
              <About /> {this.state.theme}
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
