import React from "react";
import { ProjectThemeType, ThemeType } from "../../utilities/MyTypes";
import AlfieNormal from "./AlfieNormal";
import AlfieProjects from "./AlfieProjects";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const Alfie = ({ theme, projectsTheme }: Props) => {
  return (
    <div className="ALFIE TOP-COMP">
      <AlfieNormal theme={theme} projectsTheme={projectsTheme} />
      <AlfieProjects theme={theme} projectsTheme={projectsTheme} />
    </div>
  );
};

export default Alfie;
