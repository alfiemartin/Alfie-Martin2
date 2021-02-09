import React, { useEffect, useRef, useState } from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const paragraphs = [
  "neurify was founded in response to the rapid digitalisation of marketing during the Coronavirus pandemic.",
  "Nice and chill is the daughter site to neurify. This is where content for neurify campains are stored. Example content includes trackable quizzes and articles which produce highly segmented data",
  "RDM Technology is an engineering company based in sheffield. RDM Technology design and develop electronic and software solutions",
  "Tap Flash is a fun little game with the potential to evolve into something bigger. Buttons flash on the screen and you have to press them in order. Pretty easy? ;)",
];

const ContactProjects = ({ theme, projectsTheme }: Props) => {
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);
  let textRef = useRef<HTMLHeadingElement>(null);
  const [text, setText] = useState<string>(paragraphs[0]);

  useEffect(() => {
    if (theme === "projects") {
      tempRef.current = gsap.to(textRef.current, { y: 0 });
    } else tempRef.current = gsap.to(textRef.current, { y: contRef.current.clientHeight });
  }, [theme]);

  useEffect(() => {
    const changeText = (index: number) => {
      setText(paragraphs[index]);
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
      default:
    }
  }, [projectsTheme]);

  return (
    <div ref={contRef} className="NORMAL CONTACT-PROJECTS">
      <h1 ref={textRef}>{text}</h1>
    </div>
  );
};

export default ContactProjects;
