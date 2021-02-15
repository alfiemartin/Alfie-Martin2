import React, { useEffect, useRef, useState } from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const paragraphs = [
  "neurify was founded by myself and two of my brothers in response to the rapid digitalisation of marketing during the Coronavirus pandemic.",
  "Nice and chill is the daughter site to neurify. This is where content for neurify campains are stored. Example content includes trackable quizzes and articles which produce highly segmented data",
  "RDM Technology is an engineering company based in sheffield. RDM Technology design and develop electronic and software solutions",
  "Tap Flash is a fun little game with the potential to evolve into something bigger. Buttons flash on the screen and you have to press them in order. Pretty easy? ;)",
];

const ContactProjects = ({ theme, projectsTheme }: Props) => {
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);
  let textRef = useRef<HTMLHeadingElement>(null);
  const [text, setText] = useState<string>(paragraphs[0]);
  const [blockProjectThemeChange, setBlockProjectThemeChange] = useState<boolean>(false);

  useEffect(() => {
    const timing = 0.3;
    setBlockProjectThemeChange(true);
    if (theme === "projects") {
      tempRef.current = gsap.to(textRef.current, { y: 0, duration: timing });
    } else {
      tempRef.current = gsap.to(textRef.current, { y: contRef.current.clientHeight, duration: timing });
    }

    let timer = setTimeout(() => {
      setBlockProjectThemeChange(false);
    }, timing * 1000);

    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const timing = 0.4;
    const changeText = (index: number) => {
      if (index === -1) {
        tempRef.current = gsap.to(textRef.current, { y: contRef.current.clientHeight, duration: timing });

        timer = setTimeout(() => {
          setText("");
        }, timing * 1000);

        return;
      }

      if (!blockProjectThemeChange) {
        tempRef.current = gsap.to(textRef.current, { y: -contRef.current.clientHeight, duration: timing });
        tempRef.current = gsap.to(textRef.current, { y: contRef.current.clientHeight, duration: 0, delay: timing });
        tempRef.current = gsap.to(textRef.current, { y: 0, duration: timing, delay: timing });
      }

      timer = setTimeout(
        () => {
          setText(paragraphs[index]);
        },
        blockProjectThemeChange ? 0 : timing * 1000
      );
    };

    switch (projectsTheme) {
      case "neurify":
        changeText(0);
        break;
      case "Nice and Chill":
        changeText(1);
        break;
      case "RDM Technology":
        changeText(2);
        break;
      case "Tap Flash":
        changeText(3);
        break;
      case "none":
        changeText(-1);
      default:
    }

    return () => clearTimeout(timer);
  }, [projectsTheme]);

  return (
    <div ref={contRef} className="NORMAL CONTACT-PROJECTS">
      <h1 ref={textRef}>{text}</h1>
    </div>
  );
};

export default ContactProjects;
