import React, { useEffect, useRef } from "react";
import { ThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";
import MailChimp from "react-mailchimp-form";

interface Props {
  setContactLockToggle: () => void;
  theme: ThemeType;
}

const ContactContact = ({ theme, setContactLockToggle }: Props) => {
  let contRef = useRef<HTMLDivElement>(null);
  let wrapperRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);

  useEffect(() => {
    if (theme === "contact") {
      tempRef.current = gsap.to(wrapperRef.current, { y: 0 });
    } else {
      tempRef.current = gsap.to(wrapperRef.current, { y: contRef.current.clientHeight });
    }
  }, [theme]);

  return (
    <div className="NORMAL CONTACT-CONTACT" ref={contRef}>
      <div className="wrapper" ref={wrapperRef}>
        <h1>Get In Touch</h1>
        <div>
          <h2>phone: +447528559068</h2>
          <h2>email: alfie@neurify.co.uk</h2>
        </div>
        <button onClick={() => setContactLockToggle()}>Send a message directly</button>
      </div>
    </div>
  );
};

export default ContactContact;
