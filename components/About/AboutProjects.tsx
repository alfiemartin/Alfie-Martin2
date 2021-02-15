import React, { useEffect, useRef, useState } from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const aboutTexts = [
  "neurify was built using Wordpress and Elementor. This was my first introduction to web development, back during the summer pandemic.",
  "Nice and chill was built using mainly php. A redesign is currently on the way to convert to a more modern stack, but for now, Covid delays all..",
  "Was built using next js and was one of my first sites i built using a framework. This project also used Tailwind CSS for styling.",
  "Tapflash was built using react js. The game also uses Tailwind CSS for styling and Firebase for authentication and databases.",
];

const AboutProjects = ({ theme, projectsTheme }: Props) => {
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);
  let textRef = useRef<HTMLHeadingElement>(null);

  const [text, setText] = useState<string>(aboutTexts[0]);
  const [blockProjectThemeChange, setBlockProjectThemeChange] = useState<boolean>(false);

  useEffect(() => {
    const timing = 0.4;
    setBlockProjectThemeChange(true);
    if (theme === "projects") {
      tempRef.current = gsap.to(textRef.current, { y: 0, duration: timing });
    } else tempRef.current = gsap.to(textRef.current, { y: contRef.current.clientHeight, duration: timing });

    let timer = setTimeout(() => {
      setBlockProjectThemeChange(false);
    }, timing * 1000);
    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const timing = 0.4;
    const animateText = (index: number) => {
      if (!blockProjectThemeChange) {
        tempRef.current = gsap.to(textRef.current, { y: -contRef.current.clientHeight, duration: timing });
        tempRef.current = gsap.to(textRef.current, { y: contRef.current.clientHeight, duration: 0, delay: timing });
        tempRef.current = gsap.to(textRef.current, { y: 0, duration: timing, delay: timing });
      }

      timer = setTimeout(
        () => {
          setText(aboutTexts[index]);
        },
        blockProjectThemeChange ? 0 : timing * 1000
      );
    };

    switch (projectsTheme) {
      case "neurify":
        animateText(0);
        break;
      case "Nice and Chill":
        animateText(1);
        break;
      case "RDM Technology":
        animateText(2);
        break;
      case "Tap Flash":
        animateText(3);
        break;
      default:
    }

    return () => clearTimeout(timer);
  }, [projectsTheme]);

  return (
    <div className="NORMAL ABOUT-PROJECTS" ref={contRef}>
      <h1 ref={textRef}>{text}</h1>
    </div>
  );
};

export default AboutProjects;
