import React, { useEffect, useRef } from "react";
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

interface Props {
  theme: ThemeType;
  setProjectsTheme: (theme: ProjectThemeType) => void;
}

const ProjectsProjects = ({ theme, setProjectsTheme }: Props) => {
  let gridRef = useRef<HTMLDivElement>(null);
  let contRef = useRef<HTMLDivElement>(null);
  let gridItemsRef = useRef<Array<HTMLDivElement>>(Array(4).fill(null));
  let tempRef = useRef<GSAPTween>(null);

  useEffect(() => {
    if (theme === "projects") {
      gridItemsRef.current.forEach((itemRef, index) => {
        tempRef.current = gsap.to(itemRef, {
          ...themeIsProjectsTweens[index],
          opacity: 1,
        });
      });
    } else if (theme === "normal") {
      gridItemsRef.current.forEach((itemRef, index) => {
        tempRef.current = gsap.to(itemRef, {
          ...themeIsNormalTweens[index],
          opacity: 0,
        });
      });
    }
  }, [theme]);

  useEffect(() => {
    const mouseOverProject = (index: number) => {
      switch (index) {
        case 0:
          setProjectsTheme("neurify");
          break;
        case 1:
          setProjectsTheme("Nice and Chill");
          break;
        case 2:
          setProjectsTheme("RDM Technology");
          break;
        case 3:
          setProjectsTheme("Tap Flash");
          break;
      }
    };

    gridItemsRef.current.forEach((itemRef, index) => {
      itemRef.addEventListener("mouseover", () => mouseOverProject(index));
      tempRef.current = gsap.to(itemRef, {
        ...themeIsNormalTweens[index],
        opacity: 0,
      });
    });

    return () =>
      gridItemsRef.current.forEach((itemRef, index) => {
        itemRef.removeEventListener("mouseover", () => mouseOverProject(index));
      });
  }, []);

  return (
    <div className="PROJECTS-PROJECTS" ref={contRef}>
      <div className="grid" ref={gridRef}>
        <div className="grid-item" ref={(el) => (gridItemsRef.current[0] = el)}>
          neurify
        </div>
        <div className="grid-item" ref={(el) => (gridItemsRef.current[1] = el)}>
          Nice and chill
        </div>
        <div className="grid-item" ref={(el) => (gridItemsRef.current[2] = el)}>
          RDM Technology
        </div>
        <div className="grid-item" ref={(el) => (gridItemsRef.current[3] = el)}>
          Tap Flash
        </div>
      </div>
    </div>
  );
};

export default ProjectsProjects;
