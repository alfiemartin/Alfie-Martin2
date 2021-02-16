import React, { useEffect, useRef } from "react";
import { ThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
}

const ProjectsContact = ({ theme }: Props) => {
  let wrapperRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);

  useEffect(() => {
    if (theme === "contact") {
      tempRef.current = gsap.to(wrapperRef.current, { x: 0 });
    } else {
      tempRef.current = gsap.to(wrapperRef.current, { x: wrapperRef.current.clientWidth });
    }
  }, [theme]);

  return (
    <div className="NORMAL PROJECTS-CONTACT">
      <div className="wrapper" ref={wrapperRef}>
        <h1>Get In Touch</h1>
        <div>
          <h2>phone: +447528559068</h2>
          <h2>email: alfie@neurify.co.uk</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContact;
