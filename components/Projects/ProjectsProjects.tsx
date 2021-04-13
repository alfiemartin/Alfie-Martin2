import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ProjectThemeType, ThemeType } from "../../utilities/MyTypes";

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

const getIndexFromProject = (project: ProjectThemeType) => {
  switch (project) {
    case "neurify":
      return 0;
    case "Nice and Chill":
      return 1;
    case "RDM Technology":
      return 2;
    case "Tap Flash":
      return 3;
    default:
      return -1;
  }
};

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

  const [pressedProject, setPressedProject] = useState<ProjectThemeType>("none");
  const [hoveredProject, setHoveredProject] = useState<ProjectThemeType>("none");

  // !handlers
  const handleMouseLeave = () => {
    if (pressedProject === "none") {
      setProjectsTheme("none");
      setTheme("normal");
      setHoveredProject("none");
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

    if (justPressedProject === prevPressedProject) setPressedProject("none");
    else {
      setPressedProject(justPressedProject);
      setProjectsTheme(hoveredProject);
    }
  };

  //!styling
  const styleProjects = (projectIndex: number, startTween: gsap.TweenVars, endTween: gsap.TweenVars) => {
    if (projectIndex === -1) {
      gridItemsRef.current.forEach((item) => {
        tempRef.current = gsap.to(item, startTween);
      });
      return;
    }

    gridItemsRef.current.forEach((item) => {
      tempRef.current = gsap.to(item, startTween);
    });
    tempRef.current = gsap.to(gridItemsRef.current[projectIndex], endTween);
  };

  useEffect(() => {
    styleProjects(getIndexFromProject(hoveredProject), { color: "white" }, { color: "red" });
  }, [hoveredProject]);

  useEffect(() => {
    styleProjects(getIndexFromProject(pressedProject), { z: 0 }, { z: 30 });
  }, [pressedProject]);

  useEffect(() => {
    if (theme === "projects") {
      gridItemsRef.current.forEach((item, index) => {
        tempRef.current = gsap.to(item, { ...themeIsProjectsTweens[index], opacity: 1, pointerEvents: "all" });
      });
    } else {
      gridItemsRef.current.forEach((item, index) => {
        tempRef.current = gsap.to(item, { ...themeIsNormalTweens[index], opacity: 0, pointerEvents: "none" });
      });
    }
  }, [theme]);

  return (
    <div className="PROJECTS-PROJECTS" ref={contRef}>
      <div className="grid" ref={gridRef} onMouseLeave={() => handleMouseLeave()}>
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
