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
    const timing = 0.5;
    if (theme === "projects") {
      tempRef.current = gsap.to(titleRef.current, { x: -contRef.current.clientWidth, duration: timing });
    } else {
      tempRef.current = gsap.to(titleRef.current, { x: 0, duration: timing });
    }
  }, [theme]);

  return (
    <div ref={contRef} className="NORMAL ALFIE-NORMAL">
      <h1 ref={titleRef}>Alfie Martin</h1>
    </div>
  );
};

export default AlfieNormal;
