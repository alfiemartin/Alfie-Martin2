import React, { useEffect, useRef } from "react";
import { ThemeProps } from "../../utilities/MyTypes";
import gsap from "gsap";

const themeIsProjectsTween: gsap.TweenVars = { opacity: 0 };
const themeIsNormalTween: gsap.TweenVars = { opacity: 1 };

const ProjectsNormal = ({ theme }: ThemeProps) => {
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);

  useEffect(() => {
    if (theme !== "projects") tempRef.current = gsap.to(contRef.current, { y: 0 });
    else tempRef.current = gsap.to(contRef.current, { y: contRef.current.clientHeight });
  }, [theme]);

  return (
    <div className="NORMAL PROJECTS-NORMAL" ref={contRef}>
      <h1>Projects</h1>
    </div>
  );
};

export default ProjectsNormal;
