import React, { useEffect, useRef } from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const SecretNormal = ({ theme, projectsTheme }: Props) => {
  let contRef = useRef<HTMLDivElement>(null);
  let inputRef = useRef<HTMLInputElement>(null);
  let tempRef = useRef<GSAPTween>(null);

  useEffect(() => {
    if (theme === "projects") {
      tempRef.current = gsap.to(inputRef.current, { y: contRef.current.clientHeight });
    } else {
      tempRef.current = gsap.to(inputRef.current, { y: 0 });
    }
  }, [theme]);

  return (
    <div ref={contRef} className="NORMAL SECRET-NORMAL">
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default SecretNormal;
