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
    setBlockProjectThemeChange(true);
    if (theme === "projects") {
      tempRef.current = gsap.to(textRef.current, { y: 0, duration: 0.4 });
    } else [(tempRef.current = gsap.to(textRef.current, { y: contRef.current.clientHeight, duration: 0.4 }))];

    let timer = setTimeout(() => {
      setBlockProjectThemeChange(false);
    }, 400);
    return () => clearInterval(timer);
  }, [theme]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const animateText = (index: number) => {
      if (!blockProjectThemeChange) {
        tempRef.current = gsap.to(textRef.current, { opacity: 0, duration: 0.3 });
        tempRef.current = gsap.to(textRef.current, { opacity: 1, duration: 0.3, delay: 0.3 });
      }

      timer = setTimeout(() => {
        setText(aboutTexts[index]);
      }, 300);
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

    return () => clearInterval(timer);
  }, [projectsTheme]);

  return (
    <div className="NORMAL ABOUT-PROJECTS" ref={contRef}>
      <h1 ref={textRef}>{text}</h1>
    </div>
  );
};

export default AboutProjects;
