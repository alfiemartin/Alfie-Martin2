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
const codeList = [
  "https://github.com/alfiemartin/",
  "https://github.com/alfiemartin/",
  "https://github.com/alfiemartin/rdm-technology",
  "https://github.com/alfiemartin/TapFlash",
];

const liveList = [
  "https://www.neurify.co.uk",
  "https://www.niceandchill.com",
  "https://www.rdmtechnology.com",
  "https://tapflash-77edb.web.app/",
];

const openInNewTab = (url: string) => {
  let win = window.open(url, "_blank");
  win.focus();
};

const AboutProjects = ({ theme, projectsTheme }: Props) => {
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);
  let textRef = useRef<HTMLHeadingElement>(null);

  let codeDivRef = useRef<HTMLDivElement>(null);
  let liveDivRef = useRef<HTMLDivElement>(null);

  const [codeLink, setCodeLink] = useState<string>(codeList[0]);
  const [liveLink, setLiveLink] = useState<string>(liveList[0]);

  const [text, setText] = useState<string>(aboutTexts[0]);
  const [blockProjectThemeChange, setBlockProjectThemeChange] = useState<boolean>(false);

  useEffect(() => {
    const timing = 0.4;
    setBlockProjectThemeChange(true);
    if (theme === "projects") {
      tempRef.current = gsap.to(textRef.current, { y: 0, duration: timing });

      tempRef.current = gsap.to(codeDivRef.current, { rotateX: 0, opacity: 1 });
      tempRef.current = gsap.to(liveDivRef.current, { rotateY: 0, opacity: 1 });
    } else {
      tempRef.current = gsap.to(textRef.current, { y: contRef.current.clientHeight, duration: timing });

      tempRef.current = gsap.to(codeDivRef.current, { rotateX: 180, opacity: 0 });
      tempRef.current = gsap.to(liveDivRef.current, { rotateY: 180, opacity: 0 });
    }

    let timer = setTimeout(() => {
      setBlockProjectThemeChange(false);
    }, timing * 1000);
    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const timing = 0.4;
    const animateText = (index: number) => {
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
          setText(aboutTexts[index]);
        },
        blockProjectThemeChange ? 0 : timing * 1000
      );
    };

    switch (projectsTheme) {
      case "neurify":
        animateText(0);

        setCodeLink(codeList[0]);
        setLiveLink(liveList[0]);
        break;
      case "Nice and Chill":
        animateText(1);

        setCodeLink(codeList[1]);
        setLiveLink(liveList[1]);
        break;
      case "RDM Technology":
        animateText(2);

        setCodeLink(codeList[2]);
        setLiveLink(liveList[2]);
        break;
      case "Tap Flash":
        animateText(3);

        setCodeLink(codeList[3]);
        setLiveLink(liveList[3]);
        break;
      case "none":
        animateText(-1);

        setCodeLink("/");
        setLiveLink("/");
      default:
    }

    return () => clearTimeout(timer);
  }, [projectsTheme]);

  return (
    <div className="NORMAL ABOUT-PROJECTS" ref={contRef}>
      <div className="wrapper">
        <h1 ref={textRef}>{text}</h1>
        <div ref={codeDivRef}>
          <button onClick={() => openInNewTab(codeLink)}> View Code!</button>
        </div>
        <div ref={liveDivRef}>
          <button onClick={() => openInNewTab(liveLink)}>View Live!</button>
        </div>
      </div>
    </div>
  );
};

export default AboutProjects;
