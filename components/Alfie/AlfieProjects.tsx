import React, { useEffect, useRef, useState } from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const AlfieProjects = ({ theme, projectsTheme }: Props) => {
  let titleRef = useRef<HTMLHeadingElement>(null);
  let tempRef = useRef<GSAPTween>(null);
  let contRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState<string>(projectsTheme);
  const [blockTitleAnimationChange, setBlockTitleChangeAnimation] = useState<boolean>(false);

  useEffect(() => {
    let timer;
    setBlockTitleChangeAnimation(true);
    if (theme === "projects") {
      tempRef.current = gsap.to(titleRef.current, { x: 0, duration: 0.5 });
    } else {
      tempRef.current = gsap.to(titleRef.current, { x: contRef.current.clientWidth, duration: 0.5 });
    }

    timer = setTimeout(() => {
      setBlockTitleChangeAnimation(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    let timer;
    if (!blockTitleAnimationChange) {
      tempRef.current = gsap.to(titleRef.current, { opacity: 0, duration: 0.2 });
      tempRef.current = gsap.to(titleRef.current, { opacity: 1, duration: 0.2, delay: 0.2 });

      timer = setTimeout(() => {
        setTitle(projectsTheme);
      }, 200);
    } else setTitle(projectsTheme);

    return () => clearTimeout(timer);
  }, [projectsTheme]);

  return (
    <div ref={contRef} className="NORMAL ALFIE-PROJECTS">
      <h1 ref={titleRef}>{title}</h1>
    </div>
  );
};

export default AlfieProjects;
