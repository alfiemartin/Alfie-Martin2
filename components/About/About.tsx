import React from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import AboutNormal from "./AboutNormal";
import AboutProjects from "./AboutProjects";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const About = ({ theme, projectsTheme }: Props) => {
  return (
    <div className="ABOUT TOP-COMP">
      <AboutNormal theme={theme} projectsTheme={projectsTheme} />
      <AboutProjects theme={theme} projectsTheme={projectsTheme} />
    </div>
  );
};

export default About;
