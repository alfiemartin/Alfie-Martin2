import React from "react";
import AboutNormal from "./AboutNormal";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const About = ({ theme, projectsTheme }: Props) => {
  return (
    <div className="ABOUT TOP-COMP">
      <AboutNormal />
    </div>
  );
};

export default About;
