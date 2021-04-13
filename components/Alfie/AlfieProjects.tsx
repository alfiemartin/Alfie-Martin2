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
    let timer: NodeJS.Timeout;
    let timing = 0.5;
    setBlockTitleChangeAnimation(true);
    if (theme === "projects") {
      tempRef.current = gsap.to(titleRef.current, { x: 0, duration: timing });
    } else {
      tempRef.current = gsap.to(titleRef.current, { x: contRef.current.clientWidth, duration: timing });
    }

    timer = setTimeout(() => {
      setBlockTitleChangeAnimation(false);
    }, timing * 1000);

    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const timing = 0.4;
    if (!blockTitleAnimationChange && theme === "projects") {
      tempRef.current = gsap.to(titleRef.current, { x: -contRef.current.clientWidth, duration: timing });
      tempRef.current = gsap.to(titleRef.current, { x: contRef.current.clientWidth, duration: 0, delay: timing });
      tempRef.current = gsap.to(titleRef.current, { x: 0, duration: timing, delay: timing });
      timer = setTimeout(
        () => {
          setTitle(projectsTheme);
        },
        blockTitleAnimationChange ? 0 : timing * 1000
      );
    } else setTitle(projectsTheme);
    return () => clearTimeout(timer);
  }, [projectsTheme]);

  return (
    <div ref={contRef} className="NORMAL ALFIE-PROJECTS">
      <h1 ref={titleRef}>{theme === "projects" ? title : ""}</h1>
    </div>
  );
};

export default AlfieProjects;
