import React, { useRef } from "react";
import { ThemeProps } from "../../utilities/MyTypes";

const themeIsProjectsTween: gsap.TweenVars = { opacity: 0 };
const themeIsNormalTween: gsap.TweenVars = { opacity: 1 };

const ProjectsNormal = ({ theme }: ThemeProps) => {
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);

  return (
    <div className="NORMAL PROJECTS-NORMAL" ref={contRef}>
      <h1>Projects</h1>
    </div>
  );
};

export default ProjectsNormal;
