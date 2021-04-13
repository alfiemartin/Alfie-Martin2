import React, { useEffect, useRef } from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const AboutNormal = ({ theme, projectsTheme }: Props) => {
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);
  let textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (theme === "projects") {
      tempRef.current = gsap.to(textRef.current, { y: contRef.current.clientHeight });
    } else tempRef.current = gsap.to(textRef.current, { y: 0 });
  }, [theme]);

  return (
    <div className="NORMAL ABOUT-NORMAL" ref={contRef}>
      <h1 ref={textRef}>About</h1>
    </div>
  );
};

export default AboutNormal;
