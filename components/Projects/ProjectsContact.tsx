import React, { useEffect, useRef } from "react";
import { ThemeType } from "../../utilities/MyTypes";
import gsap from "gsap";
import MailChimp from "react-mailchimp-form";

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
        <MailChimp
          action="https://gmail.us7.list-manage.com/subscribe/post?u=b1c036d6b741d86d40ac0386f&amp;id=e72ab7f84d"
          fields={[
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true,
            },
            {
              name: "NAME",
              placeholder: "Name",
              type: "name",
              required: true,
            },
            {
              name: "MESSAGE",
              placeholder: "Message",
              type: "message",
              required: true,
            },
          ]}
          messages={{
            success: "Sent!",
            error: "An unexpected internal error has occurred.",
            empty: "You must complete the form",
            button: "Contact Me!",
          }}
          className="mailchimp-form"
        />
      </div>
    </div>
  );
};

export default ProjectsContact;
