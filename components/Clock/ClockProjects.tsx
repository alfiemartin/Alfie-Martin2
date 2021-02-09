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
    setBlockImageChangeAnimation(true);
    if (theme === "projects") {
      tempRef.current = gsap.to(imageRef.current, { x: 0, duration: 0.5 });
    } else {
      tempRef.current = gsap.to(imageRef.current, { x: contRef.current.clientWidth, duration: 0.5 });
    }
    const timer = setTimeout(() => {
      setBlockImageChangeAnimation(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const animateImage = (projectTheme: string) => {
      if (!blockImageChangeAnimation) {
        tempRef.current = gsap.to(imageRef.current, { opacity: 0, duration: 0.2 });
        tempRef.current = gsap.to(imageRef.current, { opacity: 1, duration: 0.2, delay: 0.3 });

        timer = setTimeout(() => {
          const img = new Image();
          img.onload = () => {
            setImageSrc(projectTheme);
          };
          img.src = imageSrc;
        }, 200);
      } else {
        const img = new Image();
        img.onload = () => {
          setImageSrc(projectTheme);
        };
        img.src = imageSrc;
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
