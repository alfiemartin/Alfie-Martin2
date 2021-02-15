import React, { useEffect, useRef, useState } from "react";
import { ThemeType, ProjectThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
}

const ClockProjects = ({ theme, projectsTheme }: Props) => {
  let tempRef = useRef<GSAPTween>(null);
  let contRef = useRef<HTMLDivElement>(null);
  let imageRef = useRef<HTMLImageElement>(null);

  const [imageSrc, setImageSrc] = useState<string>("neurifylogo.png");
  const [blockImageChangeAnimation, setBlockImageChangeAnimation] = useState<boolean>(false);

  useEffect(() => {
    const timing = 0.5;
    setBlockImageChangeAnimation(true);
    if (theme === "projects") {
      tempRef.current = gsap.to(imageRef.current, { x: 0, duration: timing });
    } else {
      tempRef.current = gsap.to(imageRef.current, { x: contRef.current.clientWidth, duration: timing });
    }
    const timer = setTimeout(() => {
      setBlockImageChangeAnimation(false);
    }, timing * 1000);

    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const timing = 0.4;
    const animateImage = (projectTheme: string) => {
      if (projectTheme === "none") {
        tempRef.current = gsap.to(imageRef.current, { opacity: 0, duration: timing });
        return;
      }

      if (!blockImageChangeAnimation) {
        tempRef.current = gsap.to(imageRef.current, { opacity: 0, duration: timing });
        tempRef.current = gsap.to(imageRef.current, { opacity: 1, duration: timing, delay: timing + 0.1 });

        timer = setTimeout(
          () => {
            setImageSrc(projectTheme);
          },
          blockImageChangeAnimation ? 0 : timing * 1000
        );
      } else {
        setImageSrc(projectTheme);
      }
    };

    switch (projectsTheme) {
      case "Nice and Chill":
        animateImage("naclogo.png");
        break;
      case "RDM Technology":
        animateImage("rdmlogo.gif");
        break;
      case "Tap Flash":
        animateImage("TapFlash logo.png");
        break;
      case "neurify":
        animateImage("neurifylogo.png");
        break;
      case "none":
        animateImage("");
      default:
    }

    return () => clearTimeout(timer);
  }, [projectsTheme]);

  return (
    <div ref={contRef} className="CLOCK-PROJECTS NORMAL">
      <img ref={imageRef} src={imageSrc} alt={projectsTheme} />
    </div>
  );
};

export default ClockProjects;
