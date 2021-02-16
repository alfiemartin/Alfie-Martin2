import React, { useEffect, useRef } from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const ContactNormal = ({ theme, projectsTheme }: Props) => {
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);
  let textRef = useRef<HTMLHeadingElement>(null);
  let formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === "projects" || theme === "alfie") {
      tempRef.current = gsap.to(textRef.current, { y: contRef.current.clientHeight });
    } else tempRef.current = gsap.to(textRef.current, { y: 0 });

    if (theme === "contact") {
      tempRef.current = gsap.to(formRef.current, { y: 0 });
    } else {
      tempRef.current = gsap.to(formRef.current, { y: contRef.current.clientHeight });
    }
  }, [theme]);
  return (
    <div ref={contRef} className="NORMAL">
      <h1 ref={textRef}>Contact</h1>
    </div>
  );
};

export default ContactNormal;
