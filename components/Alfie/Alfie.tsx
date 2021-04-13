import React from "react";
import { ProjectThemeType, ThemeType } from "../../utilities/MyTypes";
import AlfieNormal from "./AlfieNormal";
import AlfieProjects from "./AlfieProjects";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
  setTheme: (theme: ThemeType) => void;
}

const Alfie = ({ theme, projectsTheme, setTheme }: Props) => {
  const handleLeave = () => {
    if (projectsTheme === "none") setTheme("normal");
  };

  return (
    <div className="ALFIE TOP-COMP" onMouseLeave={handleLeave}>
      <AlfieNormal theme={theme} projectsTheme={projectsTheme} />
      <AlfieProjects theme={theme} projectsTheme={projectsTheme} />
    </div>
  );
};

export default Alfie;
