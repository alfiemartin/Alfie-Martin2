import React, { useEffect, useRef, useState } from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const aboutTexts = [
  "Was built using Wordpress.",
  "Was built using php. A redesign is currently on the way to convert to a more modern stack, but for now, Covid delays all..",
  "Was built using next js and was one of my first sites i built using a framework. This project also used Tailwind CSS for styling.",
  "Tapflash was built using react js. The game also uses Tailwind CSS for styling and Firebase for authentication and databases",
];

const AboutProjects = ({ theme, projectsTheme }: Props) => {
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);
  let textRef = useRef<HTMLHeadingElement>(null);

  const [text, setText] = useState<string>(aboutTexts[0]);

  useEffect(() => {
    if (theme === "projects") {
      tempRef.current = gsap.to(textRef.current, { y: 0 });
    } else [(tempRef.current = gsap.to(textRef.current, { y: contRef.current.clientHeight }))];
  }, [theme]);

  useEffect(() => {
    const animateText = (index: number) => {
      setText(aboutTexts[index]);
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
  }, [projectsTheme]);

  return (
    <div className="NORMAL ABOUT-PROJECTS" ref={contRef}>
      <h1 ref={textRef}>{projectsTheme} was made using typescript, react and ...</h1>
    </div>
  );
};

export default AboutProjects;
