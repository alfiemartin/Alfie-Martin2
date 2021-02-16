import React, { useState } from "react";
import { ProjectThemeType, ThemeType } from "../../utilities/MyTypes";
import ContactAlfie from "./ContactAlfie";
import ContactNormal from "./ContactNormal";
import ContactProjects from "./ContactProjects";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
  setTheme: (theme: ThemeType) => void;
}

const Contact = ({ theme, projectsTheme, setTheme }: Props) => {
  return (
    <div className="CONTACT TOP-COMP">
      <ContactNormal theme={theme} projectsTheme={projectsTheme} />
      <ContactProjects theme={theme} projectsTheme={projectsTheme} />
      <ContactAlfie theme={theme} />
    </div>
  );
};

export default Contact;
