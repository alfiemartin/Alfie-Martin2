import React from "react";
import { ProjectThemeType, ThemeType } from "../../utilities/MyTypes";
import ContactNormal from "./ContactNormal";
import ContactProjects from "./ContactProjects";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const Contact = ({ theme, projectsTheme }: Props) => {
  return (
    <div className="CONTACT TOP-COMP">
      <ContactNormal theme={theme} projectsTheme={projectsTheme} />
      <ContactProjects theme={theme} projectsTheme={projectsTheme} />
    </div>
  );
};

export default Contact;
