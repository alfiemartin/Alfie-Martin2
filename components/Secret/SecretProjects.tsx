import React, { useEffect, useRef, useState } from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

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

const SecretProjects = ({ theme, projectsTheme }: Props) => {
  let contRef = useRef<HTMLDivElement>(null);
  let codeDivRef = useRef<HTMLDivElement>(null);
  let liveDivRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);

  const [codeLink, setCodeLink] = useState<string>(codeList[0]);
  const [liveLink, setLiveLink] = useState<string>(liveList[0]);

  useEffect(() => {
    if (theme === "projects") {
      tempRef.current = gsap.to(codeDivRef.current, { rotateX: 0, opacity: 1 });
      tempRef.current = gsap.to(liveDivRef.current, { rotateY: 0, opacity: 1 });
    } else {
      tempRef.current = gsap.to(codeDivRef.current, { rotateX: 180, opacity: 0 });
      tempRef.current = gsap.to(liveDivRef.current, { rotateY: 180, opacity: 0 });
    }
  }, [theme]);

  useEffect(() => {
    switch (projectsTheme) {
      case "neurify":
        setCodeLink(codeList[0]);
        setLiveLink(liveList[0]);
        break;
      case "Nice and Chill":
        setCodeLink(codeList[1]);
        setLiveLink(liveList[1]);
        break;
      case "RDM Technology":
        setCodeLink(codeList[2]);
        setLiveLink(liveList[2]);
        break;
      case "Tap Flash":
        setCodeLink(codeList[3]);
        setLiveLink(liveList[3]);
        break;
      default:
        setCodeLink("/");
        setLiveLink("/");
    }
  }, [projectsTheme]);

  return (
    <div ref={contRef} className="NORMAL SECRET-PROJECTS">
      <div ref={codeDivRef}>
        <button onClick={() => openInNewTab(codeLink)}> View Code!</button>
      </div>
      <div ref={liveDivRef}>
        <button onClick={() => openInNewTab(liveLink)}>View Live!</button>
      </div>
    </div>
  );
};

export default SecretProjects;
