import React, { useState } from "react";
import { ProjectThemeType, ThemeType } from "../../utilities/MyTypes";
import ContactAlfie from "./ContactAlfie";
import ContactContact from "./ContactContact";
import ContactNormal from "./ContactNormal";
import ContactProjects from "./ContactProjects";

interface Props {
  theme: ThemeType;
  projectsTheme: ProjectThemeType;
  setTheme: (theme: ThemeType) => void;
  setContactLockToggle: () => void;
  contactLock: boolean;
}

const Contact = ({ theme, projectsTheme, setTheme, setContactLockToggle, contactLock }: Props) => {
  const handleLeave = () => {
    if (contactLock) return;
    else {
      setTheme("normal");
    }
  };

  return (
    <div className="CONTACT TOP-COMP" onMouseLeave={handleLeave}>
      <ContactNormal theme={theme} projectsTheme={projectsTheme} />
      <ContactProjects theme={theme} projectsTheme={projectsTheme} />
      <ContactAlfie theme={theme} />
      <ContactContact theme={theme} setContactLockToggle={setContactLockToggle} />
    </div>
  );
};

export default Contact;
