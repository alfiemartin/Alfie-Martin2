import React from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import ClockNormal from "./ClockNormal";
import ClockProjects from "./ClockProjects";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const Clock = ({ theme, projectsTheme }: Props) => {
  return (
    <div className="CLOCK TOP-COMP">
      <ClockNormal theme={theme} projectsTheme={projectsTheme} />
      <ClockProjects theme={theme} projectsTheme={projectsTheme} />
    </div>
  );
};

export default Clock;
