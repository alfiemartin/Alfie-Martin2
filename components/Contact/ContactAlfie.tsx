import React, { useEffect, useRef } from "react";
import { ThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";

interface Props {
  theme: ThemeType;
}

const ContactAlfie = ({ theme }: Props) => {
  let tempRef = useRef<GSAPTween>(null);
  let textRef = useRef<HTMLImageElement>(null);
  let contRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === "alfie") {
      tempRef.current = gsap.to(textRef.current, { y: 0 });
    } else {
      tempRef.current = gsap.to(textRef.current, { y: contRef.current.clientHeight });
    }
  }, [theme]);

  return (
    <div className="NORMAL CONTACT-ALFIE" ref={contRef}>
      <p ref={textRef}>
        <b>Hi, I'm Alfie</b> <br /> <br /> Electronic Engineer graduate from Newcastle University actively working as a
        Web Developer.
      </p>
    </div>
  );
};

export default ContactAlfie;
