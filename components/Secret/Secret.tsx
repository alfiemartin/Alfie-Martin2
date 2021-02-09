import React from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import SecretNormal from "./SecretNormal";
import SecretProjects from "./SecretProjects";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const Secret = ({ theme, projectsTheme }: Props) => {
  return (
    <div className="SECRET TOP-COMP">
      <SecretNormal theme={theme} projectsTheme={projectsTheme} />
      <SecretProjects theme={theme} projectsTheme={projectsTheme} />
    </div>
  );
};

export default Secret;
