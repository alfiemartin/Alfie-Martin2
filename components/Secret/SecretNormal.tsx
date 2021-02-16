import React, { useEffect, useRef } from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const SecretNormal = ({ theme, projectsTheme }: Props) => {
  let contRef = useRef<HTMLDivElement>(null);
  let inputRef = useRef<HTMLHeadingElement>(null);
  let tempRef = useRef<GSAPTween>(null);

  useEffect(() => {
    if (theme === "projects") {
      tempRef.current = gsap.to(contRef.current, { y: contRef.current.clientHeight });
    } else {
      tempRef.current = gsap.to(contRef.current, { y: 0 });
    }
  }, [theme]);

  return (
    <div ref={contRef} className="NORMAL SECRET-NORMAL">
      <h1 ref={inputRef}></h1>
    </div>
  );
};

export default SecretNormal;
