import React from "react";
import { ThemeType } from "../../utilities/MyTypes";
import ProjectsNormal from "./ProjectsNormal";
import ProjectsProjects from "./ProjectsProjects";

interface Props {
  theme: ThemeType;
}

const Projects = ({ theme }: Props) => {
  return (
    <div className="PROJECTS TOP-COMP">
      <ProjectsNormal />
      {theme === "projects" && <ProjectsProjects />}
    </div>
  );
};

export default Projects;
