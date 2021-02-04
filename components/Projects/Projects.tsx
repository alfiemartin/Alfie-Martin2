import React from "react";
import { ProjectThemeType, ThemeType } from "../../utilities/MyTypes";
import ProjectsNormal from "./ProjectsNormal";
import ProjectsProjects from "./ProjectsProjects";

interface Props {
  theme: ThemeType;
  setProjectsTheme: (theme: ProjectThemeType) => void;
}

const Projects = ({ theme, setProjectsTheme }: Props) => {
  return (
    <div className="PROJECTS TOP-COMP">
      <ProjectsNormal theme={theme} />
      <ProjectsProjects theme={theme} setProjectsTheme={setProjectsTheme} />
    </div>
  );
};

export default Projects;
