import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ProjectThemeType, ThemeType } from "../../utilities/MyTypes";
import { SSL_OP_ALL } from "constants";

const themeIsProjectsTweens: Array<gsap.TweenVars> = [
  { rotateX: "0deg" },
  { rotateY: "0deg" },
  { rotateY: "0deg" },
  { rotateX: "0deg" },
];

const themeIsNormalTweens: Array<gsap.TweenVars> = [
  { rotateX: "180deg" },
  { rotateY: "180deg" },
  { rotateY: "180deg" },
  { rotateX: "180deg" },
];

interface Props {
  theme: ThemeType;
  setProjectsTheme: (theme: ProjectThemeType) => void;
  setTheme: (theme: ThemeType) => void;
}

const ProjectsProjects = ({ theme, setProjectsTheme, setTheme }: Props) => {
  let gridRef = useRef<HTMLDivElement>(null);
  let contRef = useRef<HTMLDivElement>(null);
  let gridItemsRef = useRef<Array<HTMLDivElement>>(Array(4).fill(null));
  let tempRef = useRef<GSAPTween>(null);

  const [pressedProject, setPressedProject] = useState<ProjectThemeType>(
    "none"
  );
  const [hoveredProject, setHoveredProject] = useState<ProjectThemeType>(
    "none"
  );

  const handleMouseLeave = () => {
    if (pressedProject === "none") {
      setProjectsTheme("none");
      setTheme("normal");
    } else {
      setProjectsTheme(pressedProject);
      setTheme("projects");
    }
  };

  const handleMouseOverProject = (theme: ProjectThemeType) => {
    setHoveredProject(theme);
    if (pressedProject === "none") {
      setProjectsTheme(theme);
    }
  };

  const handleProjectClick = (justPressedProject: ProjectThemeType) => {
    const prevPressedProject = pressedProject;

    console.log({ justPressedProject, pressedProject });

    if (justPressedProject === prevPressedProject) setPressedProject("none");
    else setPressedProject(justPressedProject);
  };

  useEffect(() => {
    setProjectsTheme(hoveredProject);
  }, [pressedProject]);

  return (
    <div className="PROJECTS-PROJECTS" ref={contRef}>
      <div
        className="grid"
        ref={gridRef}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div
          className="grid-item"
          ref={(el) => (gridItemsRef.current[0] = el)}
          onMouseOver={() => handleMouseOverProject("neurify")}
          onClick={() => handleProjectClick("neurify")}
        >
          neurify
        </div>
        <div
          className="grid-item"
          ref={(el) => (gridItemsRef.current[1] = el)}
          onMouseOver={() => handleMouseOverProject("Nice and Chill")}
          onClick={() => handleProjectClick("Nice and Chill")}
        >
          Nice and chill
        </div>
        <div
          className="grid-item"
          ref={(el) => (gridItemsRef.current[2] = el)}
          onMouseOver={() => handleMouseOverProject("RDM Technology")}
          onClick={() => handleProjectClick("RDM Technology")}
        >
          RDM Technology
        </div>
        <div
          className="grid-item"
          ref={(el) => (gridItemsRef.current[3] = el)}
          onMouseOver={() => handleMouseOverProject("Tap Flash")}
          onClick={() => handleProjectClick("Tap Flash")}
        >
          Tap Flash
        </div>
      </div>
    </div>
  );
};

export default ProjectsProjects;
