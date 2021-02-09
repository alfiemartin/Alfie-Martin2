import React, { useEffect, useRef } from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const AlfieNormal = ({ theme, projectsTheme }: Props) => {
  let titleRef = useRef<HTMLHeadingElement>(null);
  let tempRef = useRef<GSAPTween>(null);
  let contRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === "projects") {
      tempRef.current = gsap.to(titleRef.current, { y: contRef.current.clientHeight });
    } else {
      tempRef.current = gsap.to(titleRef.current, { y: 0 });
    }
  }, [theme]);

  return (
    <div ref={contRef} className="NORMAL ALFIE-NORMAL">
      <h1 ref={titleRef}>Alfie Martin</h1>
    </div>
  );
};

export default AlfieNormal;
