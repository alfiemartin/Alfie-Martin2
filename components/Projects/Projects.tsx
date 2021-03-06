import React from "react";
import { ProjectThemeType, ThemeType } from "../../utilities/MyTypes";
import ProjectsNormal from "./ProjectsNormal";
import ProjectsProjects from "./ProjectsProjects";

interface Props {
  theme: ThemeType;
  setProjectsTheme: (theme: ProjectThemeType) => void;
  setTheme: (theme: ThemeType) => void;
}

const Projects = ({ theme, setProjectsTheme, setTheme }: Props) => {
  return (
    <div className="PROJECTS TOP-COMP">
      <ProjectsNormal theme={theme} />
      <ProjectsProjects
        theme={theme}
        setProjectsTheme={setProjectsTheme}
        setTheme={setTheme}
      />
    </div>
  );
};

export default Projects;
