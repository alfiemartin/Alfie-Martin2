import React, { useEffect, useRef } from "react";
import { ThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
}

const ProjectsAlfie = ({ theme }: Props) => {
  let tempRef = useRef<GSAPTween>(null);
  let imageRef = useRef<HTMLImageElement>(null);
  let contRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === "alfie") {
      tempRef.current = gsap.to(imageRef.current, { y: 0 });
    } else {
      tempRef.current = gsap.to(imageRef.current, { y: contRef.current.clientHeight });
    }
  }, [theme]);

  return (
    <div className="NORMAL PROJECTS-ALFIE" ref={contRef}>
      <img src="alfie-head1.JPG" alt="Alfie" ref={imageRef} />
    </div>
  );
};

export default ProjectsAlfie;
